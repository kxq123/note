#<center>Git 基础</center>
### 1.怎么掉出命令窗口
1. ctrl + `

### 2.怎么把当前的工作目录调到子目录？
```html
PS D:\workspace> cd Note
PS D:\workspace\Note>
```

### 3.查看是否有笔记修改状态并推送到服务器？
1. git status
- 如果提示红的(Modified)，表示修改了，接着如果我们想把我们的改动提交到服务器使用如下命令
- git add .
- git status (可以看到修改变绿了)
- git commit -m "你的改动说明"
- git push (推送到服务器了)
- git pull (从服务器上同步更新文件)

### 4.详细的过程
```
两个好朋友小娜和小野打算一起做一个网页。
小娜负责前端的制作
小野负责后端的数据
   12.10小娜注册了github账号，并进行了登陆，她创建了一个创库，然后把地址粘贴一下，在本地创建了一个git文件夹,里面有一些文件，小娜点击鼠标右键进入 git bash here 命令窗口，然后 git clone 粘贴 这个新建的仓库，然后输入命令 git status，来查看当前的状态（看是否有修改过，哪些修改等），接着输入命令 git add . (git add xxx.txt 是单独的文件),来存入所有的文件,存入暂存区，再接着就输入命令 git commit -m 说明 ，本地提交，最后输入 git push 上传到云端。
   12.11日，小野输入命令git pull ，从云端把小娜的数据同步下来，查看，修改等。    

```
