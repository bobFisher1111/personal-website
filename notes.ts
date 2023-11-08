/*
    - Project Notes:

        - Libraries:
            - redux toolkit
              - good tutorial:
                - https://www.youtube.com/watch?v=Oc14xbizA2o
            - mui
                npm install @mui/material @emotion/react @emotion/styled
                npm install @mui/material @mui/styled-engine-sc styled-components
                npm install @fontsource/roboto
                npm install @mui/icons-material
            - react-routing 
            - react-router-dom
            - axios 
            - typescript 
            - json-server: 
                - start server, use npx instead of npm
                - npx json-server -p 3500 -w data/db.json
            - fontawesome:
              - free version: 10 views per month
              - install:
                npm i @fortawesome/react-fontawesome
                npm i @fortawesome/free-solid-svg-icons
                
        - Run Database (microsoft sql)
          - Setup:
            - https://hub.docker.com/_/microsoft-azure-sql-edge
            - docker Image:
              - docker pull mcr.microsoft.com/azure-sql-edge
            - Use Image:
              - docker run --cap-add SYS_PTRACE -e 'ACCEPT_EULA=1' -e 'MSSQL_SA_PASSWORD=F1ghting1!' -p 1433:1433 --name azuresqledge -d -v sqlvolume:/var/opt/mssql mcr.microsoft.com/azure-sql-edge

          - Run Docker:
            - check volumes: docker volume list
            - User Name: sa
            - Password: F1ghting1!
            - Persist data:
              - -v sqlvolume:/var/opt/mssql
            - docker container id:
              - e6c0f76a3c52f825bae44e2dc8e18fddf414b1acf57edc98d79a28c80bfd0e78

        - Database In Cloud:
          - Most likely single database best option
          - v(core) (recommended)
*/