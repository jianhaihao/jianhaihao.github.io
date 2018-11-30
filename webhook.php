<?php

// webhook 代码自动同步文件，请勿修改

exec("git pull 2>&1", $result, $code);

$status = $code == 0 ? 'Success' : 'Fail';
echo "git pull：" . $status;
echo "<br />";

if ($status == 'Fail') {
    echo "<pre>";
    print_r($result);
}

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
