# IDC big data master repo
###### IDC big data speciality master repo

## just a simple guide for getting started with git. no deep shit :poop: ;)

###### Important commands

- git status -> shows the current directory status (file changes)
- git add -> telling git to preper the file for a commit
- git commit -> commiting the change of the file (after adding)
- git push -> pushing the changes to a repo
- git pull -> pulling changes to a repo


1. install git via https://git-scm.com/
2. Fork (Fork button - far right corner) this repo with your github user
3. open a directory in your computer in which the code will be copied - your working directory from now on..
4. Run the following command in your command-line prompt, under your working directory
```
git init
git clone https://github.com/<your_github_user_name>/big_data.git
git add remote upstream git://github.com/idc-bigdata/big_data.git
git add remote origin git://github.com/<your_github_user_name>/big_data.git
```
###### you now have a local copy of origin (your forked project)
5. once you're done with your file changes (add/remove content), you should perform the following 
```
git add <file_name_to_add>
git commit -m "my message - place to explain my change"
git push origin master
```
###### updating your local repo with other's changes
6. every time you want to align with the recent changes, run the following command
```
git pull upstream master
git push origin master
```
