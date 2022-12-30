mkdir Mongo_myflix
cd Mongo_myflix
git init
git config core.sparseCheckout true
git remote add -f origin https://github.com/jackdmorrison/Mongo_myflix.git
echo "Thumbnail/*" > .git/info/sparse-checkout
git checkout main