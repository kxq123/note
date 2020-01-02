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