<!DOCTYPE html>
<html>

<head>
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Web Mapping for UHI</title>
    <!-- import libraries -->
    <!-- style.css -->
    <link rel="stylesheet" href="../css/style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Itim&display=swap" rel="stylesheet">

    <!-- Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

    <!-- Leaflet Ajax -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/leaflet-ajax/2.1.0/leaflet.ajax.min.js"
        integrity="sha512-Abr21JO2YqcJ03XGZRPuZSWKBhJpUAR6+2wH5zBeO4wAw4oksr8PRdF+BKIRsxvCdq+Mv4670rZ+dLnIyabbGw=="
        crossorigin="anonymous" referrerpolicy="no-referrer"></script>

    <!-- MapTiler -->
    <script src="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.umd.js"></script>
    <link href="https://cdn.maptiler.com/maptiler-sdk-js/v1.2.0/maptiler-sdk.css" rel="stylesheet" />
    <script src="https://cdn.maptiler.com/leaflet-maptilersdk/v2.0.0/leaflet-maptilersdk.js"></script>

    <!-- Bootstrap v5.3.2 -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>

    <!-- MiniMap https://github.com/Norkart/Leaflet-MiniMap?tab=readme-ov-file -->
    <link rel="stylesheet" href="../src/Control.MiniMap.css">
    <script src="../src/Control.MiniMap.js"></script>

    <!-- Coordinates Mouse -->
    <link rel="stylesheet" href="../src/Leaflet.Coordinates-0.1.5.css">
    <link rel="stylesheet" href="../src/Leaflet.Coordinates-0.1.5.ie.css">
    <script src="../src/Leaflet.Coordinates-0.1.5.min.js"></script>
    <script src="../src/Leaflet.Coordinates-0.1.5.src.js"></script>

    <!-- Current Location -->
    <link rel="stylesheet" href="../src/L.Control.Locate.min.css">
    <script src="../src/L.Control.Locate.min.js"></script>

</head>

<body>
    <?php include 'connection.php'; ?>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3" id="detail">
                <form action="get">
                    <h4>ระบบติดตามเกาะความร้อน</h4>
                    <br>
                    <label for="data">เลือกข้อมูล: </label>
                    <select name="data" id="data">
                        <option value="landUse">การใช้ที่ดิน</option>
                        <option value="LST">อุณหภูมิพื้นผิว</option>
                        <option value="UHI">ความเข้มข้นของเกาะความร้อน</option>
                        <option value="UTFVI">ความแปรปรวนของสนามความร้อน</option>
                    </select>
                </form>
            </div>
            <div class="col-9" id="map"></div>
        </div>
    </div>
    <script src="../js/script.js"></script>
</body>

</html>