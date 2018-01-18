echo +++++++++++++++++++++++++++++++++
echo +    STARTING DEPLOYMENT    +
echo +++++++++++++++++++++++++++++++++
echo ...
echo building dist...
ng build
echo +++++++++++++++++++++++++++++++++
echo +         PUSHING TO S3         +
echo +++++++++++++++++++++++++++++++++
aws s3 cp ./dist/. s3://www.pacdenucdev.com --recursive --include "*" --acl public-read --cache-control public,max-age=31536000,no-transform
echo +++++++++++++++++++++++++++++++++
echo + INVALIDATING CLOUDFRONT ASSETS+
echo +++++++++++++++++++++++++++++++++
aws cloudfront create-invalidation --distribution-id S11A16G5KZMEQD --paths /*
echo +++++++++++++++++++++++++++++++++
echo +           COMPLETE            +
echo +++++++++++++++++++++++++++++++++
