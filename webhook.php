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
exec("git commit -m 'del' 2>&1", $result2, $code2);

$status2 = $code2 == 0 ? 'Success' : 'Fail';
echo "git commit -m 'del'：" . $status2;
echo "<br />";

if ($status2 == 'Fail') {
    echo "<pre>";
    print_r($result2);
}

// 3. 同步远程旧文件删除
exec("git push 2>&1", $result3, $code3);

$status3 = $code3 == 0 ? 'Success' : 'Fail';
echo "git push：" . $status3;
echo "<br />";

if ($status3 == 'Fail') {
    echo "<pre>";
    print_r($result3);
}

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
// git  push

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
