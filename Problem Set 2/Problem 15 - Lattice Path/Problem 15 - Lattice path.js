function latticepath(n) {

    for (var i = 1, c = 1; i <= n; i++)
        c = c * (n + i) / i;
    return c;
}

latticepath(20);