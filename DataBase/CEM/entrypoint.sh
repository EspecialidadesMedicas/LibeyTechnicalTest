#!/bin/bash

# Start SQL Server in the background
/opt/mssql/bin/sqlservr &

# Wait until SQL Server is ready
echo "Waiting for SQL Server to start..."

# Loop until sqlcmd works
until /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -Q "SELECT 1" > /dev/null 2>&1
do
    echo "SQL Server is not ready yet. Waiting..."
    sleep 1
done

# Run the SQL script
echo "SQL Server is up. Running the script..."
/opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -d master -i /var/opt/sqlserver/SqlCmdScript.sql

# Keep container running
wait
