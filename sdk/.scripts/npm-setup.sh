gcloud artifacts print-settings npm \
    --project=production-artifact-registry \
    --repository=carewell-npm-production \
    --location=us \
    --scope=@carewell > .npmrc

npx google-artifactregistry-auth .npmrc
