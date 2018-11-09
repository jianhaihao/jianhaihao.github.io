# 自定义封装函数


### 数据集转换成Tree

```php

/**
 * 数据集转换成Tree
 */
function listToTree($list, $pk = 'id', $pid = 'pid', $child = 'children', $root = 0)
{
    // 创建Tree
    $tree = [];
    if (is_array($list)) {
        // 创建基于主键的数组引用
        $refer = [];
        foreach ($list as $key => $data) {
            $list[$key][$child] = [];
            $refer[$data[$pk]]  = &$list[$key];
        }

        foreach ($list as $key => $data) {
            // 判断是否存在parent
            $parentId = $data[$pid];
            if ($root == $parentId) {
                $tree[] = &$list[$key];
            } else {
                if (isset($refer[$parentId])) {
                    $parent           = &$refer[$parentId];
                    $parent[$child][] = &$list[$key];
                }
            }
        }
    }

    return $tree;
}

```

### 获取当前主机名

```php

/**
 * 获取当前主机名
 * @return [string] [带协议的主机名，末尾无斜杠]
 */
function getHost()
{
    $protocol = 'http://';
    if (isset($_SERVER['HTTPS']) && ('1' == $_SERVER['HTTPS'] || 'on' == strtolower($_SERVER['HTTPS']))) {
        $protocol = 'https://';
    } elseif (isset($_SERVER['SERVER_PORT']) && ('443' == $_SERVER['SERVER_PORT'])) {
        $protocol = 'https://';
    }

    $host = $_SERVER['HTTP_HOST'];

    return $protocol . $host;
}

```

### base64转图片

```php

/**
 * [base64ToImg description]
 * @param  [type] $str       [base64位字符串]
 * @param  string $file_path [图片保存路径]  eg. "avatar/"、"goods_imgs/"
 * @return [arr]             [code data msg]
 */
function base64ToImg($str, $file_path = '')
{
    if (!$str) {
        return ['code' => 0, 'msg' => '图片编码缺失'];
    }

    $file_type = '';

    if (stristr($str, 'image/jpeg') !== false) {
        $file_type = 'jpeg';
        $str       = str_replace('data:image/jpeg;base64,', '', $str);
    }

    if (stristr($str, 'image/jpg') !== false) {
        $file_type = 'jpg';
        $str       = str_replace('data:image/jpg;base64,', '', $str);
    }

    if (stristr($str, 'image/png') !== false) {
        $file_type = 'png';
        $str       = str_replace('data:image/png;base64,', '', $str);
    }

    if (stristr($str, 'image/gif') !== false) {
        $file_type = 'gif';
        $str       = str_replace('data:image/gif;base64,', '', $str);
    }

    if ($file_type) {
        $output_file = 'uploads/' . $file_path . uniqid() . '.' . $file_type;
        file_put_contents($output_file, base64_decode($str));

        $file_url = Helper::getHost() . '/' . $output_file;

        return ['code' => 1, 'data' => $file_url];
    } else {
        return ['code' => 0, 'msg' => '图片编码不支持'];
    }
}

```