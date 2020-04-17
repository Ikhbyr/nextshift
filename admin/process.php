<?php
    $servername = "localhost"; // сервер комьютерийн хаяг буюу нэр
	$username = "root";     // MySQL-ийн бааз руу хандах хэрэглэгчийн нэр
	$password = ""; // MySQL-ийн бааз руу хандах нууц үг
	$database = "test"; // Баазын нэр
    $errors = "hahah";
// Өгөгдлийн сантай холбох объект үүсгэх
    $conn = new mysqli($servername, $username, $password, $database);

    //adding photo
    $target_dir = "../images/";
    $target_file = $target_dir . basename($_FILES["photo"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    // Check if image file is a actual image or fake image
    if(isset($_POST["submit"])){
        $check = getimagesize($_FILES["photo"]["tmp_name"]);
        if($check !== false) {
            echo "File is an image - " . $check["mime"] . ".";
            $uploadOk = 1;
        } else {
            echo "File is not an image.";
            $uploadOk = 0;
        }
    }
    // Check if file already exists
    if (file_exists($target_file)) {
        echo "Таны оруулсан нэртэй file орсон байна.";
        $uploadOk = 0;
    }
    // Check file size
    echo $_FILES["photo"]["size"];
    if ($_FILES["photo"]["size"] > 900000) {
        echo "Уучлаарай алдаа гарлаа таны зурагний хэмжээ хэтэрхий их байна.";
        $uploadOk = 0;
    }
    // Allow certain file formats
    if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif" && $imageFileType != "jpg") {
        echo "Уучлаарай, Таний оруулсан зураг JPG, JPEG, PNG & GIF зөвхөн эдгээр өргөтгөлтэй байх ёстой.";
        $uploadOk = 0;
    }
    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk == 0) {
        echo "Sorry, your file was not uploaded.";
    // if everything is ok, try to upload file
    } else {
        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
            echo "The file ". basename( $_FILES["photo"]["name"]). " has been uploaded.";
        } else {
            echo "Sorry, there was an error uploading your file.";
        }
    }
    echo $file_name = $_FILES["photo"]["name"];
    if($file_name==''){
        echo $file_name='noimage.jpg';
    }


    $action = isset($_GET['action']) ? $_GET['action'] : '';
    if($action == 'addNews'){
        echo 'Amjilttai orloo';
        $qry = "
            insert into funds(title, totalPrice, profitRate, duringOperation, distribution, investmentAmount, photo)
            values ('{$_POST['title']}','{$_POST['total_price']}','{$_POST['target_rate']}','{$_POST['during_operation']}','{$_POST['distribution']}','{$_POST['minimum_investment_amount']}','{$file_name}')
        ";
        if ($conn->query($qry) === true) {
            echo 'Amjilttai orloo';
            echo "<script type='text/javascript'>window.top.location='admin.php';</script>";exit;
        }else{
            echo $conn->error;
        }
    }
?>