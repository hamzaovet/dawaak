@echo off
title Dawaak Local Bridge Daemon
color 0A
echo ========================================================
echo   DAWAAK PHARMACY BRIDGE DAEMON (v2.0)
echo   جسر المزامنة السحابي التلقائي لأنظمة الصيدليات المصرية
echo ========================================================
echo.
echo Checking Python environment...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python is not installed. Please install Python or use the standalone EXE.
    pause
    exit /b
)

echo Starting Background Sync Daemon...
python "%~dp0dawaak_bridge.py"
pause
