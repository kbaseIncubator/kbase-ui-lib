tsc
rm -rf ./lib
rm -rf ./templib
copyfiles -u 1  "./build/**/*" "./templib/"
copyfiles -u 1  "./src/**/*.css" "./templib/"
copyfiles -u 1 "./src/style/**/*" "./templib/"
mv ./templib ./lib