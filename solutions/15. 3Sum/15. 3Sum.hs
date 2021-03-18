threeSum as bs cs = [[a, b, c] | a <- as, b <- bs, c <- cs, a + b + c == 0]
