var cardSets = [
    //FORMAT : {name: "XxX", numCards: [# of cards (excl. holos), # of cards (incl. holos)], setNum: "XxX", rVariants: []},
    {name: "Scarlet & Violet - White Flare (SV10.5)", numCards: [173, 405], setNum: "WHT", rVariants: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86] , pVariants: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86] , mVariants: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 78]},
	{name: "Scarlet & Violet - Black Bolt (SV10.5)", numCards: [172, 403], setNum: "BLK", rVariants: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], pVariants: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86], mVariants:[1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78]},
    {name: "Scarlet & Violet - Destined Rivals (SV10)", numCards: [244, 409], setNum: "DRI", rVariants: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 137, 138, 140, 141, 142, 143, 144, 146, 147, 148, 149, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182]},
    {name: "Scarlet & Violet - Journey Together (SV09)", numCards: [190, 333], setNum: "JTG", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 49, 50, 52, 54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 76, 77, 78, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 112, 113, 115, 116, 117, 118, 119, 120, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]},
    {name: "Scarlet & Violet - Prismatic Evolutions", numCards: [180, 447], setNum: "PRE", rVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 29, 33, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 57, 59, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 74, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118, 120, 121, 122, 123, 124, 125, 126, 127, 130], pVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 29, 33, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 57, 59, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 74, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 118, 120, 121, 122, 123, 124, 125, 126, 127, 130], mVariants:[1, 2, 3, 4, 5, 7, 8, 9, 10, 13, 15, 16, 18, 19, 20, 21, 22, 24, 25, 29, 33, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 57, 59, 61, 62, 63, 65, 66, 67, 68, 69, 70, 71, 72, 74, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90]},
    {name: "Scarlet & Violet - Surging Sparks (SV08)", numCards: [252, 417], setNum: "SSP", rVariants: [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 38, 39, 40, 41, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 131, 132, 134, 135, 136, 137, 138, 139, 140, 141, 143, 144, 145, 146, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 161, 163, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 177, 178, 179, 180, 181, 184, 187, 188, 189, 190]},
    {name: "Scarlet & Violet - Stellar Crown (SV07)", numCards: [175, 300], setNum: "SCR", rVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 29, 31, 33, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 81, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 135, 137, 138, 139, 140, 141]},
    {name: "Scarlet & Violet - Shrouded Fable", numCards: [99, 154], setNum: "SFA", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 61, 63, 64]},
    {name: "Scarlet & Violet - Twilight Masquerade (SV06)", numCards: [226, 373], setNum: "TWM", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 24, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62, 63, 65, 66, 67, 69, 70, 71, 72, 73, 74, 75, 76, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 110, 111, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 131, 132, 133, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 159, 160, 161, 166]},
    {name: "Scarlet & Violet - Temporal Forces (SV05)", numCards: [218, 358], setNum: "TEF", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 109, 110, 112, 113, 114, 115, 116, 117, 118, 119, 121, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 155, 156, 159, 160, 161]},
    {name: "Scarlet & Violet - Paldean Fates", numCards: [245, 326], setNum: "PAF", rVariants: [1, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 55, 56, 57, 58, 60, 61, 62, 63, 64, 65, 67, 68, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91]},
    {name: "Scarlet & Violet - Paradox Rift (SV04)", numCards: [266, 428], setNum: "PAR", rVariants: [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 51, 52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 90, 91, 92, 93, 94, 95, 96, 97, 99, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 136, 138, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182]},
    {name: "Scarlet & Violet - 151", numCards: [207, 360], setNum: "MEW", rVariants: [1, 2, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 116, 117, 118, 119, 120, 121, 122, 123, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 146, 147, 148, 149, 150, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165]},
    {name: "Scarlet & Violet - Obsidian Flames (SV03)", numCards: [230, 406], setNum: "OBF", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 97, 98, 99, 100, 101, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 126, 127, 128, 129, 130, 131, 132, 133, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 157, 158, 160, 161, 162, 163, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197]},
    {name: "Scarlet & Violet - Paldea Evolved (SV02)", numCards: [279, 455], setNum: "PAL", rVariants: [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 60, 62, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 128, 129, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193]},
    {name: "Scarlet & Violet (SV01)", numCards: [258, 444], setNum: "SVI", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 82, 83, 84, 85, 87, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 124, 126, 127, 128, 129, 130, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198]},
    {name: "Crown Zenith + Galarian Gallery", numCards: [230, 343], setNum: "CRZ+CRZGG", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 52, 56, 57, 58, 59, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 97, 106, 107, 109, 110, 111, 112, 115, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146]},
    {name: "Crown Zenith: Galarian Gallery", numCards: [70, 70], setNum: "CRZGG", rVariants: []},
    {name: "Crown Zenith", numCards: [160, 273], setNum: "CRZ", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 17, 21, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 52, 56, 57, 58, 59, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 97, 106, 107, 109, 110, 111, 112, 115, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146]},
    {name: "Sword & Shield - Silver Tempest: Trainer Gallery (SWSH12)", numCards: [30, 30], setNum: "SITTG", rVariants: []},
    {name: "Sword & Shield - Silver Tempest (SWSH12)", numCards: [215, 357], setNum: "SIT", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30, 31, 32, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 60, 61, 62, 63, 64, 67, 68, 69, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 137, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 155, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169]},
    {name: "Sword & Shield - Lost Origin: Trainer Gallery (SWSH11)", numCards: [30, 30], setNum: "LORTG", rVariants: []},
    {name: "Sword & Shield - Lost Origin (SWSH11)", numCards: [217, 366], setNum: "LOR", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 50, 51, 52, 53, 54, 55, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 121, 122, 125, 126, 127, 128, 132, 133, 134, 138, 139, 140, 141, 142, 143, 144, 145, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171]},
    {name: "Pokémon GO", numCards: [88, 145], setNum: "PGO", rVariants: [1, 2, 3, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 51, 52, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70]},
    {name: "Sword & Shield - Astral Radiance: Trainer Gallery (SWSH10)", numCards: [30, 30], setNum: "ASRTG", rVariants: []},
    {name: "Sword & Shield - Astral Radiance (SWSH10)", numCards: [216, 344], setNum: "ASR", rVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20, 21, 22, 23, 24, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 43, 44, 45, 47, 48, 51, 52, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 74, 75, 76, 77, 79, 80, 82, 85, 86, 88, 89, 90, 91, 92, 93, 95, 96, 97, 100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]},
    {name: "Sword & Shield - Brilliant Stars: Trainer Gallery (SWSH09)", numCards: [30, 30], setNum: "BRSTG", rVariants: []},
    {name: "Sword & Shield - Brilliant Stars (SWSH09)", numCards: [186, 310], setNum: "BRS", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 20, 21, 23, 24, 25, 26, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 46, 47, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 66, 67, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 89, 90, 91, 92, 93, 94, 98, 99, 100, 101, 102, 103, 104, 107, 108, 109, 110, 111, 112, 113, 115, 116, 117, 118, 119, 120, 121, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151]},
    {name: "Sword & Shield - Fusion Strike (SWSH08)", numCards: [284, 501], setNum: "FST", rVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 41, 42, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 74, 75, 77, 80, 81, 82, 83, 84, 85, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 105, 106, 107, 108, 109, 110, 111, 112, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 147, 148, 149, 150, 151, 152, 153, 154, 155, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244]},
    {name: "Celebrations + Classic Collection", numCards: [50, 50], setNum: "CEL+CELCC", rVariants: []},
    {name: "Celebrations: Classic Collection", numCards: [25, 25], setNum: "CELCC", rVariants: []},
    {name: "Celebrations", numCards: [25, 25], setNum: "CEL", rVariants: []},
    {name: "Sword & Shield - Evolving Skies (SWSH07)", numCards: [237, 369], setNum: "EVS", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 15, 16, 17, 19, 20, 22, 23, 24, 25, 26, 27, 32, 33, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 49, 50, 52, 53, 54, 55, 56, 57, 60, 61, 62, 63, 66, 67, 68, 69, 71, 72, 73, 76, 77, 78, 79, 80, 81, 82, 84, 85, 86, 87, 88, 89, 90, 93, 96, 97, 98, 99, 102, 103, 104, 105, 106, 107, 108, 109, 112, 113, 114, 115, 116, 118, 119, 120, 121, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165]},
    {name: "Sword & Shield - Chilling Reign (SWSH06)", numCards: [233, 369], setNum: "CRE", rVariants: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 91, 92, 93, 94, 95, 96, 98, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 114, 115, 116, 117, 118, 120, 121, 122, 123, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159]},
    {name: "Sword & Shield - Battle Styles (SWSH05)", numCards: [183, 306], setNum: "BST", rVariants: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 89, 90, 91, 92, 93, 94, 95, 96, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 111, 112, 113, 114, 115, 116, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141]},
    {name: "Shining Fates + Shiny Vault", numCards: [195, 241], setNum: "SHF+SHFSV", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 47, 48, 49, 52, 56, 57, 58, 59, 60, 61, 62, 63]},
    {name: "Shining Fates: Shiny Vault", numCards: [122, 122], setNum: "SHFSV", rVariants: []},
    {name: "Shining Fates", numCards: [73, 119], setNum: "SHF", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 40, 41, 42, 43, 47, 48, 49, 52, 56, 57, 58, 59, 60, 61, 62, 63]},
    {name: "Sword & Shield - Vivid Voltage (SWSH04)", numCards: [203, 345], setNum: "VIV", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 38, 39, 40, 41, 42, 45, 46, 47, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 100, 101, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113, 114, 116, 117, 118, 120, 121, 122, 123, 124, 125, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 139, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165]},
    {name: "Champion's Path", numCards: [80, 134], setNum: "CPA", rVariants: [2, 3, 4, 6, 7, 9, 10, 11, 12, 18, 19, 20, 24, 25, 26, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68]},
    {name: "Sword & Shield - Darkness Ablaze (SWSH03)", numCards: [201, 356], setNum: "DAA", rVariants: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 96, 97, 98, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 120, 121, 122, 123, 124, 125, 126, 127, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176]},
    {name: "Sword & Shield - Rebel Clash (SWSH02)", numCards: [209, 360], setNum: "RCL", rVariants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 24, 25, 27, 28, 29, 30, 31, 32, 33, 34, 37, 38, 39, 40, 41, 42, 44, 45, 46, 47, 48, 51, 52, 53, 54, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 68, 69, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174]},
    {name: "Sword & Shield (SWSH01)", numCards: [216, 381], setNum: "SSH", rVariants: [2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 51, 52, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 81, 82, 83, 84, 85, 87, 88, 89, 90, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 140, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186]},
    {name: "Sun & Moon - Cosmic Eclipse (SM12)", numCards: [271, 461], setNum: "CEC", rVariants: [2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 159, 160, 161, 162, 163, 164, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209]},
    {name: "Hidden Fates + Shiny Vault", numCards: [163, 219], setNum: "HIF+HIFSV", rVariants: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 40, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]},
    {name: "Hidden Fates: Shiny Vault", numCards: [94, 94], setNum: "HIFSV", rVariants: []},
    {name: "Hidden Fates", numCards: [69, 125], setNum: "HIF", rVariants: [1, 2, 3, 4, 5, 7, 8, 10, 11, 12, 13, 15, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 32, 33, 34, 35, 37, 38, 39, 40, 41, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65]},
    {name: "Sun & Moon - Unified Minds (SM11)", numCards: [258, 454], setNum: "UNM", rVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51, 52, 53, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 73, 74, 75, 76, 77, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 127, 128, 129, 130, 131, 133, 134, 135, 136, 137, 138, 139, 140, 142, 143, 144, 145, 147, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 159, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213]},
    {name: "Sun & Moon - Unbroken Bonds (SM10)", numCards: [234, 410], setNum: "UNB", rVariants: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 126, 127, 128, 129, 131, 132, 133, 134, 135, 136, 137, 138, 139, 141, 142, 143, 144, 145, 146, 147, 148, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190]},
    {name: "Detective Pikachu", numCards: [18, 18], setNum: "DET", rVariants: []},
    {name: "XY - Evolutions (XY12)", numCards: [113, 196], setNum: "EVO", rVariants: [3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 23, 24, 25, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57, 58, 59, 61, 62, 63, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]}
];

function generateCardSetOptions() {
    var cardSetSelect = document.getElementById("cardSet");
    cardSetSelect.innerHTML = "";
    
    /*
    // Add the default "Select a card set" option
    var defaultOption = document.createElement("option");
    defaultOption.text = " *** PLEASE SELECT A CARD SET *** ";
    defaultOption.value = ""; // Empty value
    defaultOption.disabled = true; // Make it unselectable
    defaultOption.selected = true; // Make it the default selected option
    cardSetSelect.add(defaultOption);
    */

    // Add the card sets from the array
    for (var i = 0; i < cardSets.length; i++) {
        var cardSetOption = document.createElement("option");
        cardSetOption.text = cardSets[i].name + " (" + cardSets[i].numCards[0] + " cards)";
        cardSetOption.setAttribute("setName", cardSets[i].name);
        cardSetOption.setAttribute("numCards", cardSets[i].numCards);
        cardSetOption.setAttribute("setNum", cardSets[i].setNum);
        cardSetOption.setAttribute("rVariants", cardSets[i].rVariants);
        cardSetOption.setAttribute("pVariants", cardSets[i].pVariants || ""); // Add pVariants attribute
        cardSetOption.setAttribute("mVariants", cardSets[i].mVariants || ""); // Add mVariants attribute
        cardSetSelect.add(cardSetOption);
    }
}

function populateStartPositionOptions() {
    var numPerPage = parseInt(document.getElementById("numPerPage").value);
    var startPositionSelect = document.getElementById("startPosition");
    startPositionSelect.innerHTML = ""; // Clear existing options
    
    for (var i = 1; i <= numPerPage; i++) {
        var option = document.createElement("option");
        option.value = i;
        option.text = "Position " + i;
        startPositionSelect.add(option);
    }
}

function updateVariantDropdowns() {
    var selectedSet = document.getElementById("cardSet").selectedOptions[0];
    var rVariants = selectedSet.getAttribute("rVariants");
    var pVariants = selectedSet.getAttribute("pVariants");
    var mVariants = selectedSet.getAttribute("mVariants");
    
    // Show/hide dropdowns based on variants
    document.getElementById("rVariantContainer").classList.toggle("hide", !rVariants || rVariants === "");
    document.getElementById("pVariantContainer").classList.toggle("hide", !pVariants || pVariants === "");
    document.getElementById("mVariantContainer").classList.toggle("hide", !mVariants || mVariants === "");

    // Check if interleave dropdown should be shown
    checkInterleaveCondition();
}

function checkInterleaveCondition() {
    const rDisplay = document.getElementById('rVariantDisplay').value;
    const pDisplay = document.getElementById('pVariantDisplay').value;
    const mDisplay = document.getElementById('mVariantDisplay').value;
    
    let count = 0;
    if (rDisplay === 'atEnd') count++;
    if (pDisplay === 'atEnd') count++;
    if (mDisplay === 'atEnd') count++;
    
    document.getElementById('interleaveContainer').classList.toggle('hide', count < 2);
}

function generatePages() {
    var optionsDiv = document.querySelector(".options");
    optionsDiv.classList.remove("hide");
    
    var setName = document.getElementById("cardSet").selectedOptions[0].getAttribute("setName");
    var numCards = document.getElementById("cardSet").selectedOptions[0].getAttribute("numCards");
    numCards = numCards.split(",").map(Number);
    var numPerPage = parseInt(document.getElementById("numPerPage").value);
    var startPosition = parseInt(document.getElementById("startPosition").value);
    var setNum = document.getElementById("cardSet").selectedOptions[0].getAttribute("setNum");
    var rVariants = document.getElementById("cardSet").selectedOptions[0].getAttribute("rVariants");
    rVariants = rVariants.split(",").map(Number);
    var pVariants = document.getElementById("cardSet").selectedOptions[0].getAttribute("pVariants");
    pVariants = pVariants ? pVariants.split(",").map(Number) : [];
    var mVariants = document.getElementById("cardSet").selectedOptions[0].getAttribute("mVariants");
    mVariants = mVariants ? mVariants.split(",").map(Number) : [];
    var rVariantDisplay = document.getElementById("rVariantDisplay").value;
    var pVariantDisplay = document.getElementById("pVariantDisplay").value;
    var mVariantDisplay = document.getElementById("mVariantDisplay").value;
    var interleaveHolos = document.getElementById("interleaveHolos").value === "yes";
    
    var imageNames = [];
    
    // Add blank cards before the starting position
    for (var i = 1; i < startPosition; i++) {
        imageNames.push("images/000/000.png");
    }
    
    // Generate card images based on rVariantDisplay, pVariantDisplay, and mVariantDisplay
    for (var i = 1; i <= numCards[0]; i++) {
        let iStr = i.toString().padStart(3, '0');
        imageNames.push("images/" + setNum + "/" + iStr + ".png"); // Base card
        
        if (rVariantDisplay === "interleaved" && rVariants.includes(i)) {
            imageNames.push("images/" + setNum + "/" + iStr + "r.png"); // Reverse holo
        }
        if (pVariantDisplay === "interleaved" && pVariants.includes(i)) {
            imageNames.push("images/" + setNum + "/" + iStr + "p.png"); // Poké Ball holo
        }
        if (mVariantDisplay === "interleaved" && mVariants.includes(i)) {
            imageNames.push("images/" + setNum + "/" + iStr + "m.png"); // Master Ball holo
        }
    }
    
    // Add variants at the end if selected
    if (rVariantDisplay === "atEnd" || pVariantDisplay === "atEnd" || mVariantDisplay === "atEnd") {
        if (interleaveHolos) {
            // Interleave holos per card
            for (let i = 1; i <= numCards[0]; i++) {
                const iStr = i.toString().padStart(3, '0');
                if (rVariantDisplay === 'atEnd' && rVariants.includes(i)) {
                    imageNames.push(`images/${setNum}/${iStr}r.png`);
                }
                if (pVariantDisplay === 'atEnd' && pVariants.includes(i)) {
                    imageNames.push(`images/${setNum}/${iStr}p.png`);
                }
                if (mVariantDisplay === 'atEnd' && mVariants.includes(i)) {
                    imageNames.push(`images/${setNum}/${iStr}m.png`);
                }
            }
        } else {
            // Original "at end" handling
            if (rVariantDisplay === "atEnd") {
                for (let i = 1; i <= numCards[0]; i++) {
                    const iStr = i.toString().padStart(3, '0');
                    if (rVariants.includes(i)) {
                        imageNames.push(`images/${setNum}/${iStr}r.png`);
                    }
                }
            }
            if (pVariantDisplay === "atEnd") {
                for (let i = 1; i <= numCards[0]; i++) {
                    const iStr = i.toString().padStart(3, '0');
                    if (pVariants.includes(i)) {
                        imageNames.push(`images/${setNum}/${iStr}p.png`);
                    }
                }
            }
            if (mVariantDisplay === "atEnd") {
                for (let i = 1; i <= numCards[0]; i++) {
                    const iStr = i.toString().padStart(3, '0');
                    if (mVariants.includes(i)) {
                        imageNames.push(`images/${setNum}/${iStr}m.png`);
                    }
                }
            }
        }
    }
    
    // Calculate total number of cards and pages
    var totalCards = imageNames.length;
    var numPages = Math.ceil(totalCards / numPerPage);
    var potentialNumCards = numPages * numPerPage; // Total cards for completely filled pages
    var potentialNumCardsDiff = potentialNumCards - totalCards;
    
    // Add blank cards to fill the last page if necessary
    if (potentialNumCardsDiff > 0) {
        for (var i = 1; i <= potentialNumCardsDiff; i++) {
            imageNames.push("images/000/000.png");
        }
        totalCards = imageNames.length;
    }
    
    // Calculate the actual number of cards (excluding blank cards added for starting position)
    var actualCards = numCards[0]; // Base cards
    if (rVariantDisplay !== "noR") actualCards += rVariants.length; // Reverse holos
    if (pVariantDisplay !== "noP") actualCards += pVariants.length; // Poké Ball holos
    if (mVariantDisplay !== "noM") actualCards += mVariants.length; // Master Ball holos
    
    // Generate HTML for the binder pages
    var pageHTML = `<h1>${setName}</h1>`;
    pageHTML += `<h2>Total Pages: ${numPages} // Total Cards: ${actualCards}</h2>`; // Use actualCards instead of totalCards
    
    for (var i = 1; i <= numPages; i++) {
        pageHTML += `<div class="binder-page">`;
        var cardsOnPage = Math.min(totalCards, i * numPerPage) - ((i - 1) * numPerPage);
        
        var pageRows, pageCols;
        switch (cardsOnPage) {
            case 4: pageRows = 2; pageCols = 2; break;
            case 9: pageRows = 3; pageCols = 3; break;
            case 12: pageRows = 3; pageCols = 4; break;
            case 16: pageRows = 4; pageCols = 4; break;
            default: pageRows = 0; pageCols = 0; break;
        }
        
        if (i < numPages || potentialNumCardsDiff == 0) {
            pageHTML += `<h3>Page ${i} // ${cardsOnPage} cards</h3>`;
        } else if (i == numPages && potentialNumCardsDiff > 0) {
            pageHTML += `<h3>Page ${i} // ${cardsOnPage - potentialNumCardsDiff} cards</h3>`;
        }
        
        pageHTML += `<table>`;
        for (var j = 0; j < pageRows; j++) {
            pageHTML += `<tr>`;
            for (var k = 0; k < pageCols; k++) {
                var cardNumber = (i - 1) * numPerPage + j * pageCols + k;
                if (cardNumber < totalCards) {
                    pageHTML += `<td><img src="${imageNames[cardNumber]}"></td>`;
                } else {
                    pageHTML += `<td style="height: ${100 / pageRows}%;"></td>`;
                }
            }
            pageHTML += `</tr>`;
        }
        pageHTML += `</table></div>`;
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

function toggleAdvancedOptions() {
    const advancedOptionsContent = document.querySelector('.advanced-options-content');
    const advancedOptionsToggle = document.querySelector('.advanced-options-toggle');
    advancedOptionsContent.classList.toggle('hide');
    advancedOptionsToggle.classList.toggle('open');
}

function generateSetList() {
    const setList = document.getElementById('setList');
    
    // Clear existing list items
    setList.innerHTML = '';
    
    // Create list items from cardSets array
    cardSets.forEach(set => {
        const li = document.createElement('li');
        li.textContent = set.name;
        setList.appendChild(li);
    });
}
