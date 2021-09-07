<?php
if ($_FILES) {
  $img = $_FILES["file"];
  $target = $img["tmp_name"];
  switch ($img["type"]) {
    case "image/jpg":
    case "image/jpeg":
      $image = imagecreatefromjpeg($target);
      break;
    case "image/gif":
      $image = imagecreatefromgif($target);
      break;
    case "image/png":
      $image = imagecreatefrompng($target);
      break;
  }
  $image_w = imagesx($image);
  $image_h = imagesy($image);
  $max_edge = 110;
  if ($image_w >= $image_h) {
    $thumbnail_w = $max_edge;
    $thumbnail_h = $max_edge / $image_w * $image_h;
  } else {
    $thumbnail_h = $max_edge;
    $thumbnail_w = $max_edge / $image_h * $image_w;
  }
  $thumbnail = imagecreatetruecolor($thumbnail_w, $thumbnail_h);
  imagecopyresampled($thumbnail, $image, 0, 0, 0, 0, $thumbnail_w, $thumbnail_h, $image_w, $image_h);
  $path = "../../thumb/" . $img["name"];
  switch ($img["type"]) {
    case "image/jpg":
    case "image/jpeg":
      imagejpeg($thumbnail, $path);
      break;
    case "image/gif":
      imagegif($thumbnail, $path);
      break;
    case "image/png":
      imagepng($thumbnail, $path);
      break;
  }
} else {
  $path = "/zsc/images/blank.gif";
}
echo $path;
