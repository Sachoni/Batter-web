@echo off
git add .
git commit -m "fix login and regiter ui"
git pull origin main --rebase
git push origin main
echo ✅ Update complete! Check your website in a few minutes. 🚀
pause
