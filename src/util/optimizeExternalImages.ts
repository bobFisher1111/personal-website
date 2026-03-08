type WixDimensions = {
  width: number;
  height: number;
  quality?: number;
};
// come back later to this, remove this when we figure out image thing
const isNonEmptyString = (value: string | null | undefined): value is string =>
  typeof value === "string" && value.trim().length > 0;

const tryRewriteGoogleusercontentWidth = (
  url: string,
  width: number,
): string | null => {
  if (!url.includes("googleusercontent.com")) return null;
  if (!Number.isFinite(width) || width <= 0) return null;

  const sanitizedWidth = Math.round(width);

  // Many Googleusercontent image URLs end with sizing like "=w2400".
  const widthParamRegex = /(=w)\d+(?:-[^?#]*)?$/;
  if (widthParamRegex.test(url)) {
    return url.replace(widthParamRegex, `$1${sanitizedWidth}`);
  }

  // Some variants use "=sXXX".
  const sParamRegex = /(=s)\d+(?:-[^?#]*)?$/;
  if (sParamRegex.test(url)) {
    return url.replace(sParamRegex, `$1${sanitizedWidth}`);
  }

  // If no recognized sizing suffix, append a simple width suffix.
  if (url.includes("?")) return `${url}&w=${sanitizedWidth}`;
  return `${url}=w${sanitizedWidth}`;
};

const tryRewriteWixDimensions = (
  url: string,
  dimensions: WixDimensions,
): string | null => {
  if (!url.includes("wixmp.com")) return null;
  if (!Number.isFinite(dimensions.width) || dimensions.width <= 0) return null;
  if (!Number.isFinite(dimensions.height) || dimensions.height <= 0) return null;

  const width = Math.round(dimensions.width);
  const height = Math.round(dimensions.height);
  const quality =
    typeof dimensions.quality === "number" &&
    Number.isFinite(dimensions.quality) &&
    dimensions.quality > 0 &&
    dimensions.quality <= 100
      ? Math.round(dimensions.quality)
      : undefined;

  let rewritten = url;

  if (/\bw_\d+\b/.test(rewritten)) {
    rewritten = rewritten.replace(/\bw_\d+\b/, `w_${width}`);
  } else {
    return null;
  }

  if (/\bh_\d+\b/.test(rewritten)) {
    rewritten = rewritten.replace(/\bh_\d+\b/, `h_${height}`);
  }

  if (quality !== undefined) {
    if (/\bq_\d+\b/.test(rewritten)) {
      rewritten = rewritten.replace(/\bq_\d+\b/, `q_${quality}`);
    }
  }

  return rewritten;
};

export const getOptimizedExternalImageSrc = (
  src: string | null | undefined,
  options: {
    width: number;
    height?: number;
    quality?: number;
  },
): string | undefined => {
  if (!isNonEmptyString(src)) return undefined;

  const { width, height, quality } = options;

  let wix: string | null = null;
  if (typeof height === "number") {
    const dimensions: WixDimensions = { width, height };
    if (typeof quality === "number") dimensions.quality = quality;
    wix = tryRewriteWixDimensions(src, dimensions);
  }
  if (typeof wix === "string") return wix;

  const google = tryRewriteGoogleusercontentWidth(src, width);
  if (typeof google === "string") return google;

  return src;
};

export const getOptimizedExternalImageSrcSet = (
  src: string | null | undefined,
  options: {
    widths: readonly number[];
    aspectRatio?: number;
    quality?: number;
  },
): string | undefined => {
  if (!isNonEmptyString(src)) return undefined;
  const { widths, aspectRatio, quality } = options;

  const isWix = src.includes("wixmp.com");
  const isGoogle = src.includes("googleusercontent.com");
  if (!isWix && !isGoogle) return undefined;

  const candidateWidths = widths
    .filter((w) => Number.isFinite(w) && w > 0)
    .map((w) => Math.round(w));

  const uniqueWidths = Array.from(new Set(candidateWidths)).sort((a, b) => a - b);
  if (uniqueWidths.length === 0) return undefined;

  const candidates: string[] = [];

  for (const w of uniqueWidths) {
    if (isWix) {
      if (typeof aspectRatio !== "number" || !Number.isFinite(aspectRatio)) {
        return undefined;
      }

      const h = Math.max(1, Math.round(w / aspectRatio));
      const dimensions: WixDimensions = { width: w, height: h };
      if (typeof quality === "number") dimensions.quality = quality;
      const rewritten = tryRewriteWixDimensions(src, dimensions);
      if (typeof rewritten === "string") {
        candidates.push(`${rewritten} ${w}w`);
      }
      continue;
    }

    if (isGoogle) {
      const rewritten = tryRewriteGoogleusercontentWidth(src, w);
      if (typeof rewritten === "string") {
        candidates.push(`${rewritten} ${w}w`);
      }
    }
  }

  return candidates.length > 0 ? candidates.join(", ") : undefined;
};
