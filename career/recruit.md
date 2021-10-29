# Recruit

date | company | role
--- | --- | ---
2021-10 / today | [Recruit](https://www.recruit.co.jp/) | SRE

## Reference

* https://techblog.szksh.cloud/tags/job/
* https://github.com/suzuki-shunsuke/profile#blog

## 2021-10

* Introduce AWS SSO
  * Configure AWS SSO and Google Workspace
  * Manage AWS SSO with Terraform
  * Fork [awslabs/ssosync](https://github.com/awslabs/ssosync) and run it periodically with AWS Lambda
  * Verify if some tools such as terraform and kubectl work with AWS SSO
    * Fix the in-house wrapper tool of `aws eks update-kubeconfig`
  * Write the migration guide for developer and support the migration
* Extract AWS WAF's COUNT and BLOCK log with Lambda and Kinesis Firehose
* Replace [akoi](http://github.com/suzuki-shunsuke/akoi) to [aqua](https://github.com/suzuki-shunsuke/aqua)
