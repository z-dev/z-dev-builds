rm -rf ./static && \
  mkdir ./static && \
  node bin/copyImages.js && \
  mkdir ./static/fonts && \
  cp assets/fonts/* static/fonts/ && \
  mkdir ./static/favicon && \
  cp assets/favicon/* static/favicon/
