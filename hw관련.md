## 매주 숙제 올릴 때

```bash
1.main 패치

* git checkout main(master)
* git fetch
* git pull origin main(master)

2. 브랜치 최신화

* git checkout (브랜치)
* git reset --hard origin/(브랜치)
* 만약 현재 변경사항이 있거나 작업중이라면 최신화 하기 전에 git stash 명령어로 stash에 안전하게 보관 후  reset--hard 명령어를 실행해야한다.

```
