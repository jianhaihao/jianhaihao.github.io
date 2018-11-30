<?php

// webhook 代码自动同步文件，请勿修改

// 1. 删除旧文件
exec("git rm -rf !(webhook.php|.gitignore) 2>&1", $result1, $code1);

$status1 = $code1 == 0 ? 'Success' : 'Fail';
echo "git rm -rf !(webhook.php|.gitignore)：" . $status1;
echo "<br />";

if ($status1 == 'Fail') {
    echo "<pre>";
    print_r($result1);
}

// 2. 提交旧文件删除
// exec("git commit -m 'del' 2>&1", $result2, $code2);

// $status2 = $code2 == 0 ? 'Success' : 'Fail';
// echo "git commit -m 'del'：" . $status2;
// echo "<br />";

// if ($status2 == 'Fail') {
//     echo "<pre>";
//     print_r($result2);
// }

// // 3. 同步远程旧文件删除
// exec("git push 2>&1", $result3, $code3);

// $status3 = $code3 == 0 ? 'Success' : 'Fail';
// echo "git push：" . $status3;
// echo "<br />";

// if ($status3 == 'Fail') {
//     echo "<pre>";
//     print_r($result3);
// }

// // 4. 切换分支
// exec("git checkout edit 2>&1", $result4, $code4);

// $status4 = $code4 == 0 ? 'Success' : 'Fail';
// echo "git checkout edit：" . $status4;
// echo "<br />";

// if ($status4 == 'Fail') {
//     echo "<pre>";
//     print_r($result4);
// }

// // 5. 拉取最新代码
// exec("git pull 2>&1", $result5, $code5);

// $status5 = $code5 == 0 ? 'Success' : 'Fail';
// echo "git pull：" . $status5;
// echo "<br />";

// if ($status5 == 'Fail') {
//     echo "<pre>";
//     print_r($result5);
// }

// // 6. 打包最新代码
// exec("zip -r dist.zip docs/.vuepress/dist/ 2>&1", $result6, $code6);

// $status6 = $code6 == 0 ? 'Success' : 'Fail';
// echo "zip -r dist.zip docs/.vuepress/dist/：" . $status6;
// echo "<br />";

// if ($status6 == 'Fail') {
//     echo "<pre>";
//     print_r($result6);
// }

// // 7. 切换master分支
// exec("git checkout master 2>&1", $result7, $code7);

// $status7 = $code7 == 0 ? 'Success' : 'Fail';
// echo "git checkout master：" . $status7;
// echo "<br />";

// if ($status7 == 'Fail') {
//     echo "<pre>";
//     print_r($result7);
// }

// // 8. 解压压缩包
// exec("unzip dist.zip 2>&1", $result8, $code8);

// $status8 = $code8 == 0 ? 'Success' : 'Fail';
// echo "unzip dist.zip：" . $status8;
// echo "<br />";

// if ($status8 == 'Fail') {
//     echo "<pre>";
//     print_r($result8);
// }

// // 9. 移动文件到根目录
// exec("mv docs/.vuepress/dist/* ./ 2>&1", $result9, $code9);

// $status9 = $code9 == 0 ? 'Success' : 'Fail';
// echo "mv docs/.vuepress/dist/* ./：" . $status9;
// echo "<br />";

// if ($status9 == 'Fail') {
//     echo "<pre>";
//     print_r($result9);
// }

// // 10. 删除压缩包文件
// exec("rm -f dist.zip 2>&1", $result10, $code10);

// $status10 = $code10 == 0 ? 'Success' : 'Fail';
// echo "rm -f dist.zip：" . $status10;
// echo "<br />";

// if ($status10 == 'Fail') {
//     echo "<pre>";
//     print_r($result10);
// }

// // 11. 删除解压缩目录
// exec("rm -rf docs 2>&1", $result11, $code11);

// $status11 = $code11 == 0 ? 'Success' : 'Fail';
// echo "rm -rf docs：" . $status11;
// echo "<br />";

// if ($status11 == 'Fail') {
//     echo "<pre>";
//     print_r($result11);
// }

// // 12. 提交新增文件
// exec("git add . 2>&1", $result12, $code12);

// $status12 = $code12 == 0 ? 'Success' : 'Fail';
// echo "git add .：" . $status12;
// echo "<br />";

// if ($status12 == 'Fail') {
//     echo "<pre>";
//     print_r($result12);
// }

// // 13. 提交修改到本地暂存区
// exec("git commit -m 'add' 2>&1", $result13, $code13);

// $status13 = $code13 == 0 ? 'Success' : 'Fail';
// echo "git commit -m 'add'：" . $status13;
// echo "<br />";

// if ($status13 == 'Fail') {
//     echo "<pre>";
//     print_r($result13);
// }

// // 14. 推送修改到远程服务器
// exec("git push 2>&1", $result14, $code14);

// $status14 = $code14 == 0 ? 'Success' : 'Fail';
// echo "git push：" . $status14;
// echo "<br />";

// if ($status14 == 'Fail') {
//     echo "<pre>";
//     print_r($result14);
// }

// git rm -rf !(webhook.php|.gitignore)
// git commit -m 'del'
// git push
// git checkout edit
// git pull
// zip -r dist.zip docs/.vuepress/dist/
// git checkout master 
// unzip dist.zip
// mv docs/.vuepress/dist/* ./
// rm -f dist.zip
// rm -rf docs
// git add .
// git commit -m 'add'
// git push

// 同步代码结果发送邮箱
// date_default_timezone_set('PRC');

// $content = '【WancllMS应用层】代码同步通知' . PHP_EOL
//     . '【执行命令】git pull' . PHP_EOL
//     . '【执行结果】' . $status . PHP_EOL;

// if ($status == 'Fail') {
//     $content .= '【报错信息】' . json_encode($result) . PHP_EOL;
// }

// $content .= '【同步时间】' . date('Y-m-d H:i:s') . PHP_EOL;

// $url  = 'https://api.pkd.wancll.top/v1/platform/email/send';
// $data = [
//     'to_email' => '2630110384@qq.com',
//     'content'  => $content,
// ];

// $curl = curl_init();
// curl_setopt($curl, CURLOPT_URL, $url);
// curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
// curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
// curl_setopt($curl, CURLOPT_POST, 1);
// curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
// curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
// $output = curl_exec($curl);
// curl_close($curl);
