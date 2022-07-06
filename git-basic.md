# GIT 생성

```Bash
1. Ctr1 + shift + ` # visual studio code에서 터미널 생성 단축키

2. git config --global user.name "이름"  # git 이름 정의

3. git config --global user.email "이메일"  # git 이메일 정의

4. git config --global init.defaultBranch main # 기본 Branch명을 main으로 바꿔준다.

5. git init # .git 폴더 생성
```

# GIT 명령어 모음

```Bash
1. vim  파일명.확장자명 # vim 에디터를 이용해서 파일을 생성 및 편집
# * i : 편집 가능, esc : 나가는 것, : wq : 저장 후 quit
# :q :저장없이 quit

2. git status # 파일의 상태를 알려준다 (추적하지 않는(untracked) 파일: Git의 관리에 들어간 적 없는 파일

3. .gitignore # git이 무시할 공간 작성

4. git add . #현재 파일에 있는 모든 파일들을 git이 관리 해줄 수 있게 한다.

5. git add file_name # 특정 파일을 git 관리를 위해 추가

6. git commit -am # 변경된 사항들을 add필요 없이 바로 commit (단 새로운 파일이나 버전이 있을 경우 별도의 add필요)

7. Git log # git 버전정보 알려준다 (이때까지 만든 commit 한 흔적들을 확인 할 수 있다.)

8. git diff # 파일의 달라진점을 확인할 수 있게 한다.

9. git reset --hard (돌아갈 커밋 해시) #  원하는 시점으로 돟아가게 해준다. 뒤에 커밋 해시가 없으면 마지막 커밋을 가리킴

10. git revert (되돌릴 커밋 해시) # 원하는 시점을 다시 실행

11. git revert --no-commit (되돌릴  커밋 해시) # 커밋해버리지 않고 revert하기

12. git branch (브랜치명) #브랜치 생성 (브랜치명을 붙이지 않으면 생성된 브랜치의 목록을 확인 할 수 있다.)

13. git switch (브랜치명) #현재 사용하는 브랜치 이동

14. git switch -c (브랜치명) # 브랜치 생성과 동시에 이동하기

15. git branch -d (삭제할 브랜치명) # 브랜치 삭제

16. git branch -D (강제삭제할 브랜치명) # 브랜치 강제 삭제

17. git branch -m (기존 브랜치명) (새 브랜치명) #브랜치 이름 변경

18. git merge (브랜치명) # 현재 브랜치를 타이핑한 브랜치명과 merge 한다.



```

> `git add`
>
> - 초기의 git 버전관리 할당 시에도 사용하고 파일이 수정된 후 버전을 새로 commit하기 전에도 add를 통해 할당시켜줘야 함

> - add를 통해 stage에 commit 대기상태인 파일들이 있고 commit으로 버전 할당해주면 repository 에 올라가게 된다.  
>   `git add -u` 수정되거나 삭제 등 update된 파일 모두 add

# Git에서 과거로 돌아가는 두 방식

```Bash
reset # 원하는 시점으로 돌아간 뒤 이후 내역들을 지웁니다.
revert # 되돌리기 원하는 시점의 커밋을 거꾸로 실행합니다.
```

# Branch

```bash
branch = #분기된 가지 (다른 차원)

프로젝트를 하나 이상의 모습으로 관리해야 할 때
예) 실배포용, 테스트서버용, 새로운 시도용

여러 작업들이 각각 독립되어 진행될 때

예) 신기능 1, 신기능 2, 코드개선, 긴급수정...
각각의 차원에서 작업한 뒤 확정된 것을 메인 차원에 통합
```

# branch를 합치는 두 가지 방법

```bash
merge : 두 브랜치를 한 커밋에 이어붙임 (브랜치 사용내역을 남길 필요가 있을 때 적합)

rebase : 브랜치를 다른 브랜치에 이어붙입니다. (한 줄로 깔끔히 정리될때 유용)
 #rebase를 할 경우 merge와는 다르게 남겨놓지 않을 브랜치로 switch한 상태에서 rebase를 한 이후 두 브랜치를 merge를 해줘야 한다. 그 이후 남겨놓지 않을 브랜치를 삭제한다.
```
