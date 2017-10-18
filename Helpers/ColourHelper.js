ColourHelper = function() {
}

ColourHelper.prototype.hsv2rgb = function(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

ColourHelper.prototype.hsv2argb = function(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }

    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    r = Math.round(r * 255);
    g = Math.round(g * 255);
    b = Math.round(b * 255);
    rgb = r * 65536 + g * 256 + b;
    return rgb;
}

ColourHelper.prototype.argb2rgb = function(argb) {
    a = (argb >>> 24);
    r = (argb >>  16) & 0xFF;
    g = (argb >>   8) & 0xFF;
    b = (argb)        & 0xFF;
    return argb & 0x00FFFFFF;
}

ColourHelper.prototype.rgb2hsb = function(rgb) {
    rgb = [(rgb >> 16)& 0xFF,(rgb >> 8)& 0xFF,(rgb)& 0xFF];
    console.log(rgb);
    var hsb = [];
    var rearranged = rgb.slice(0);
    var maxIndex = 0,minIndex = 0;
    var tmp;
    for(var i=0;i<2;i++) {
        for(var j=0;j<2-i;j++)
            if(rearranged[j]>rearranged[j+1]) {
                tmp=rearranged[j+1];
                rearranged[j+1]=rearranged[j];
                rearranged[j]=tmp;
            }                
    }
    for(var i=0;i<3;i++) {
        if(rearranged[0]==rgb[i]) minIndex=i;
        if(rearranged[2]==rgb[i]) maxIndex=i;
    }
    hsb[2]=rearranged[2]/255.0;
    hsb[1]=1-rearranged[0]/rearranged[2];
    hsb[0]=maxIndex*120+60* (rearranged[1]/hsb[1]/rearranged[2]+(1-1/hsb[1])) *((maxIndex-minIndex+3)%3==1?1:-1);
    hsb[0]=(hsb[0]+360)%360;
    return hsb;
}