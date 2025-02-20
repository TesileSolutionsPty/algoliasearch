<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algolia InstantSearch</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css/themes/satellite.css">

    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            padding: 20px;
        }

        .ais-InstantSearch {
            max-width: 800px;
            margin: auto;
            padding: 20px;
            background: white;
            border-radius: 8px;
            box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        .filters {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        .ais-Hits-item {
            display: flex;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ddd;
            cursor: pointer;
        }

        .ais-Hits-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 8px;
            margin-right: 15px;
        }

        /* Modal Styles */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
            background-color: white;
            margin: 10% auto;
            padding: 20px;
            border-radius: 8px;
            width: 50%;
            text-align: center;
            position: relative;
        }

        .close {
            position: absolute;
            right: 20px;
            top: 10px;
            font-size: 28px;
            cursor: pointer;
        }

        .modal img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-bottom: 15px;
        }
    </style>
</head>
<body>

    <div id="searchbox"></div>

    <div class="filters">
        <div id="refinement-list"></div>
        <div id="numeric-menu"></div>
    </div>

    <div id="hits"></div>

    <!-- Modal for User Details -->
    <div id="userModal" class="modal">
        <div class="modal-content">
            <span class="close" onclick="closeModal()">&times;</span>
            <img id="modalProfilePicture" src="" alt="Profile Picture">
            <h2 id="modalName"></h2>
            <p id="modalEmail"></p>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/instantsearch.js@4"></script>
    <script src="index.js"></script>
</body>
</html>
