rm -rf ./static && \
  mkdir ./static && \
  node bin/copyImages.js && \
  mkdir ./static/favicon && \
  cp assets/favicon/* static/favicon/
