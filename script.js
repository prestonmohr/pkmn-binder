var cardSets = [
    //{name: "Paldea Evolved", numCards: [279, 444], setNum: "PAL", rVariants: []},
    {name: "Paldea Evolved (SV02)", numCards: [279, 455], setNum: "PAL", rVariants: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 129, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193]},
    {name: "Scarlet & Violet (SV01)", numCards: [258, 444], setNum: "SVI", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 126, 127, 128, 129, 130, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198]},
    {name: "Crown Zenith", numCards: [160, 273], setNum: "CRZ", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 56, 57, 58, 59, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 97, 106, 107, 109, 110, 111, 112, 115, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146]},
    {name: "Crown Zenith: Galarian Gallery", numCards: [70, 70], setNum: "CRZGG", rVariants: []},
    {name: "Silver Tempest (SWSH12)", numCards: [215, 357], setNum: "SIT", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 60, 61, 62, 63, 64, 67, 68, 69, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 137, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169]},
    {name: "Silver Tempest: Trainer Gallery (SWSH12)", numCards: [30, 30], setNum: "SITTG", rVariants: []},
    {name: "Lost Origin (SWSH11)", numCards: [217, 366], setNum: "LOR", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 50, 51, 52, 53, 54, 55, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 121, 122, 125, 126, 127, 128, 132, 133, 134, 138, 139, 140, 141, 142, 143, 144, 145, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171]},
    {name: "Lost Origin: Trainer Gallery (SWSH11)", numCards: [30, 30], setNum: "LORTG", rVariants: []},
    {name: "Astral Radiance (SWSH10)", numCards: [216, 344], setNum: "ASR", rVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 47, 48, 51, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 79, 80, 82, 85, 86, 88, 89, 90, 91, 92, 93, 95, 96, 97, 100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]},
    {name: "Astral Radiance: Trainer Gallery (SWSH10)", numCards: [30, 30], setNum: "ASRTG", rVariants: []},
    {name: "Brilliant Stars (SWSH09)", numCards: [186, 310], setNum: "BRS", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 21, 23, 24, 25, 26, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 66, 67, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 98, 99, 100, 101, 102, 103, 104, 107, 108, 109, 110, 111, 112, 113, 115, 116, 117, 118, 119, 120, 121, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]},
    {name: "Brilliant Stars: Trainer Gallery (SWSH09)", numCards: [30, 30], setNum: "BRSTG", rVariants: []},
    {name: "Fusion Strike (SWSH08)", numCards: [284, 501], setNum: "FST", rVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 77, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 105, 106, 107, 108, 109, 110, 111, 112, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 148, 149, 150, 151, 152, 153, 154, 155, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244]},
    {name: "Celebrations", numCards: [25, 25], setNum: "CEL", rVariants: []},
    {name: "Celebrations: Classic Collection", numCards: [25, 25], setNum: "CELCC", rVariants: []},
    {name: "Evolving Skies (SWSH07)", numCards: [237, 369], setNum: "EVS", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 15, 16, 17, 19, 20, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 56, 57, 60, 61, 62, 63, 66, 67, 68, 69, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 93, 96, 97, 98, 99, 102, 103, 104, 105, 106, 107, 108, 109, 112, 113, 114, 115, 116, 118, 119, 120, 121, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165]},
    {name: "Chilling Reign (SWSH06)", numCards: [233, 369], setNum: "CRE", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 91, 92, 93, 94, 95, 96, 98, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 114, 115, 116, 117, 118, 120, 121, 122, 123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]},
    {name: "Battle Styles (SWSH05)", numCards: [183, 306], setNum: "BST", rVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141]},
    {name: "Shining Fates", numCards: [73, 119], setNum: "SHF", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 47, 48, 49, 52, 56, 57, 58, 59, 60, 61, 62, 63]},
    {name: "Shining Fates: Shiny Vault", numCards: [122, 122], setNum: "SHFSV", rVariants: []},
    {name: "Vivid Voltage (SWSH04)", numCards: [203, 345], setNum: "VIV", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 38, 39, 40, 41, 42, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 100, 101, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113, 114, 116, 117, 118, 120, 121, 122, 123, 124, 125, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 139, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165]},
    {name: "Champion's Path", numCards: [80, 134], setNum: "CPA", rVariants: [2, 3, 4, 6, 7, 9, 10, 11, 12, 18, 19, 20, 24, 25, 26, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]},
    {name: "Darkness Ablaze (SWSH03)", numCards: [201, 356], setNum: "DAA", rVariants: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176]},
    {name: "Rebel Clash (SWSH02)", numCards: [209, 360], setNum: "RCL", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174]},
    {name: "Sword & Shield (SWSH01)", numCards: [216, 381], setNum: "SSH", rVariants: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 87, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 140, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186]},
];

function generateCardSetOptions() {
    var cardSetSelect = document.getElementById("cardSet");
    cardSetSelect.innerHTML = "";
    
    for (var i = 0; i < cardSets.length; i++) {
        var cardSetOption = document.createElement("option");
        cardSetOption.text = cardSets[i].name + " (" + cardSets[i].numCards[0] + " cards)";
        cardSetOption.setAttribute("setName", cardSets[i].name); // add card set name attribute
        cardSetOption.setAttribute("numCards", cardSets[i].numCards); // add numCards attribute
        cardSetOption.setAttribute("setNum", cardSets[i].setNum); // add setNum attribute
        cardSetOption.setAttribute("rVariants", cardSets[i].rVariants); // add rVariants attribute
        cardSetSelect.add(cardSetOption);
    }
}

function generatePages() {
    
    var optionsDiv = document.querySelector(".options");
    optionsDiv.classList.remove("hide");
    
    var setName = document.getElementById("cardSet").selectedOptions[0].getAttribute("setName");
    console.log(setName)
    var numCards = document.getElementById("cardSet").selectedOptions[0].getAttribute("numCards");
    numCards = numCards.split(",").map(Number);
    var numPerPage = parseInt(document.getElementById("numPerPage").value);
    var pageNumbers = "";
    var pageHTML = "";
    var setNum = document.getElementById("cardSet").selectedOptions[0].getAttribute("setNum");
    var rVariants = document.getElementById("cardSet").selectedOptions[0].getAttribute("rVariants");
    rVariants = rVariants.split(",").map(Number);
    var rVariantDisplay = document.getElementById("rVariantDisplay").value;
    
    var imageNames = [];
    
    //console.log(numCards);
    
    if (rVariantDisplay == "interleaved") {
        for (var i = 1; i <= numCards[0]; i++) {
            let iStr = i.toString().padStart(3, '0');
            imageNames.push("images/" + setNum + "/" + iStr + ".png");
            if (rVariants.includes(i)) {
                imageNames.push("images/" + setNum + "/" + iStr + "r.png");
            }
        }
    }
    
    else if (rVariantDisplay == "noR") {
        for (var i = 1; i <= numCards[0]; i++) {
            let iStr = i.toString().padStart(3, '0');
            imageNames.push("images/" + setNum + "/" + iStr + ".png");
        }
    }
    else if (rVariantDisplay == "atEnd") {
        
        for (var i = 1; i <= numCards[0]; i++) {
            let iStr = i.toString().padStart(3, '0');
            imageNames.push("images/" + setNum + "/" + iStr + ".png");
        }
        
        for (var i = 1; i <= numCards[0]; i++) {
            let iStr = i.toString().padStart(3, '0');
            if (rVariants.includes(i)) {
                imageNames.push("images/" + setNum + "/" + iStr + "r.png");
            }
        }
    }
    
    numCards = imageNames.length;
    var numPages = Math.ceil(numCards / numPerPage);
    
    var potentialNumCards = numPages * numPerPage; // total cards for completely filled pages
    var potentialNumCardsDiff = potentialNumCards - numCards;
    
    if (potentialNumCardsDiff > 0) {
        for (var i = 1; i <= potentialNumCardsDiff; i++) {
            imageNames.push("images/000/000.png");
        }
        numCards = imageNames.length;
    }
    
    pageHTML += `<h1>${setName}</h1>`;
    pageHTML += "<h2>Total Pages: " + numPages + " // Total Cards: " + (numCards-potentialNumCardsDiff) + "</h2>";
    
    for (var i = 1; i <= numPages; i++) {
        
        pageHTML += `<div class="binder-page">`;
        
        pageNumbers += i + " ";
        
        //var pageRows = Math.ceil(Math.sqrt(numPerPage));
        //var pageCols = Math.floor(numPerPage / pageRows) + ((numPerPage % pageRows != 0) ? 1 : 0);
        var cardsOnPage = Math.min(numCards, i * numPerPage) - ((i - 1) * numPerPage);
        
        var pageRows, pageCols;
        
        switch (cardsOnPage) {
            case 4:
                pageRows = 2;
                pageCols = 2;
                break;
            case 9:
                pageRows = 3;
                pageCols = 3;
                break;
            case 12:
                pageRows = 3;
                pageCols = 4;
                break;
            case 16:
                pageRows = 4;
                pageCols = 4;
                break;
                
            default:
        }
        
        if (i < numPages || potentialNumCardsDiff == 0) {
            pageHTML += `<h3>Page ${i} // ${cardsOnPage} cards</h3>`;
        }
        else if (i == numPages && potentialNumCardsDiff > 0) { // last page, if not a full page of cards
            pageHTML += `<h3>Page ${i} // ${cardsOnPage - potentialNumCardsDiff} cards</h3>`;
        }
        pageHTML += `<table>`;
        
        for (var j = 0; j < pageRows; j++) {
            pageHTML += `<tr>`;
            
            for (var k = 0; k < pageCols; k++) {
                if (j * pageCols + k < cardsOnPage) {
                    var cardNumber = (i - 1) * numPerPage + j * pageCols + k + 1;
                    pageHTML += `<td><img src="${imageNames[cardNumber - 1]}"></td>`;
                }
                else {
                    pageHTML += `<td style="height: ${100 / pageRows}%;"></td>`;
                }
            }
            
            pageHTML += `</tr>`;
        }
        
        pageHTML += `</table>`;
        
        pageHTML += `</div>`;
    }
    
    document.getElementById("cardPages").innerHTML = pageHTML;
    document.getElementById("cardPages").style.display = "block";
}

function search() {
    var setNum = document.getElementById("cardSet").selectedOptions[0].getAttribute("setNum");
    var input = document.querySelector(".search-input");
    var value = input.value;
    var imageUrl = "images/" + setNum + "/" + value.padStart(3, "0") + ".png";
    var imageElement = document.querySelector("img[src='" + imageUrl + "']");
    if (imageElement) {
        imageElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

function formatInputValue(input) {
    var numCards = document.getElementById("cardSet").selectedOptions[0].getAttribute("numCards");
    numCards = numCards.split(",").map(Number);
    
    var formatter = new Intl.NumberFormat("en-US", {
    minimumIntegerDigits: 3,
    maximumFractionDigits: 0,
    useGrouping: false,
    style: "decimal",
    });
    var value = parseInt(input.value);
    if (value > numCards[0]) {
        value = numCards[0];
    }
    value = formatter.format(value);
    input.value = value;
}

function exportPDF() {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Get the content of the printable div
  const content = document.getElementById('printable');

  // Generate the PDF from the content of the printable div
  doc.fromHTML(content, 15, 15);

  // Save the PDF
  doc.save('binder.pdf');
}
