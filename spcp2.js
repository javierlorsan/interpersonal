class Random {
    constructor() {
        this.useA = false;
        let sfc32 = function (uint128Hex) {
            let a = parseInt(uint128Hex.substr(0, 8), 16);
            let b = parseInt(uint128Hex.substr(8, 8), 16);
            let c = parseInt(uint128Hex.substr(16, 8), 16);
            let d = parseInt(uint128Hex.substr(24, 8), 16);
            return function () {
                a |= 0; b |= 0; c |= 0; d |= 0;
                let t = (((a + b) | 0) + d) | 0;
                d = (d + 1) | 0;
                a = b ^ (b >>> 9);
                b = (c + (c << 3)) | 0;
                c = (c << 21) | (c >>> 11);
                c = (c + t) | 0;
                return (t >>> 0) / 4294967296;
            };
        };
        this.prngA = new sfc32(tokenData.hash.substr(2, 32));
        this.prngB = new sfc32(tokenData.hash.substr(34, 32));
        for (let i = 0; i < 1e6; i += 2) {
            this.prngA();
            this.prngB();
        }
    }
    random_dec() {
        this.useA = !this.useA;
        return this.useA ? this.prngA() : this.prngB();
    }
    random_num(a, b) {
        return a + (b - a) * this.random_dec();
    }
    random_int(a, b) {
        return Math.floor(this.random_num(a, b + 1));
    }
    random_choice(list) {
        return list[this.random_int(0, list.length - 1)];
    }
}

function calculateFeatures(tokenData) {

    class Random {
        constructor() {
            this.useA = false;
            let sfc32 = function (uint128Hex) {
                let a = parseInt(uint128Hex.substr(0, 8), 16);
                let b = parseInt(uint128Hex.substr(8, 8), 16);
                let c = parseInt(uint128Hex.substr(16, 8), 16);
                let d = parseInt(uint128Hex.substr(24, 8), 16);
                return function () {
                    a |= 0; b |= 0; c |= 0; d |= 0;
                    let t = (((a + b) | 0) + d) | 0;
                    d = (d + 1) | 0;
                    a = b ^ (b >>> 9);
                    b = (c + (c << 3)) | 0;
                    c = (c << 21) | (c >>> 11);
                    c = (c + t) | 0;
                    return (t >>> 0) / 4294967296;
                };
            };
            this.prngA = new sfc32(tokenData.hash.substr(2, 32));
            this.prngB = new sfc32(tokenData.hash.substr(34, 32));
            for (let i = 0; i < 1e6; i += 2) {
                this.prngA();
                this.prngB();
            }
        }
        random_dec() {
            this.useA = !this.useA;
            return this.useA ? this.prngA() : this.prngB();
        }
        random_num(a, b) {
            return a + (b - a) * this.random_dec();
        }
        random_int(a, b) {
            return Math.floor(this.random_num(a, b + 1));
        }
        random_choice(list) {
            return list[this.random_int(0, list.length - 1)];
        }
    }

    let R1 = new Random(tokenData);

    let lines = false;
    let circles = false;
    let points = false;
    let _xinc = R1.random_choice([0, 1, 2]);
    let _nrot = R1.random_choice([2, 3, 3, 4, 2, 4, 5, 1]);
    let _strk = 1;
    let personality = R1.random_choice(["selfish", "empathetic", "extroverted", "introverted", "rebellious", "conservative"]);

    switch (true) {
        case (_xinc == 0):
            circles = true;
            break;
        case (_xinc == 1):
            points = true;
            break;
        case (_xinc == 2):
            lines = true;
            circles = true;
            break;
    }

    switch (_nrot) {
        case 2:
            personality = 'introverted';
            break;
        case 3:
            personality = 'conservative';
            break;
        case 4:
            personality = 'extroverted';
            break;
        case 5:
            personality = 'empathetic';
            break;
    }

    if (_nrot == 1 && _xinc <= 2) { personality = 'selfish'; }
    if (_xinc == 2 && _nrot >= 2) _strk = R1.random_choice([0, 1, 1]);
    if (_strk == 0 && _xinc == 2 && _nrot > 1) personality = 'rebellious';

    return {
        "personality": personality,
        "lines": lines,
        "circles": circles,
        "points": points,
        "rotations": _nrot,
        "xinc": _xinc,
        "strk": _strk
    }

}
let paleta = [["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#ffba08", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8", "#D9F1F6"], //azules
["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#F5B034"], //naranjas
["#ffba08", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"], //grises y un naranja
["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"], //azules - naranjas
["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"], //marrones - verdes
["#10002b", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff", "#e0aaff", "#E3B9FB", "#D9C5E5"], //violetas
    ["#590d22", "#800f2f", "#a4133c", "#c9184a", "#023e8a", "#ff4d6d", "#ff758f", "#ff8fa3", "#6c757d", "#ffb3c1", "#ffccd5", "#fff0f3"], //rojos
    ["#ffedd8", "#f3d5b5", "#e7bc91", "#d4a276", "#97F209", "#bc8a5f", "#a47148", "#8b5e34", "#6f4518", "#603808", "#583101"], //marrones
    ["#007f5f", "#2b9348", "#55a630", "#80b918", "#580D14", "#aacc00", "#bfd200", "#d4d700", "#ff6d00", "#dddf00", "#eeef20", "#ffff3f"], //verdes - amarillos
    ["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#ff9e00", "#52b788", "#40916c", "#3c096c","#2d6a4f", "#0C6A40", "#5A9077", "#5FD49D"], //verdes
["#ff6d00", "#ff7900", "#ff8500", "#ff9100", "#ff9e00", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd"], //naranjas - morados    
["#A6B996", "#4C3033", "#E7C02C", "#0B682D", "#8562CA", "#97F209", "#F6F4F2", "#8F7791", "#B2C12B", "#EBDEA3"], //varios
["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4", "#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"], // varios
["#FA053F", "#FEB200", "#03FDBC", "#04BEFB", "#06617F", "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"], // varios
    ["#C2C8D4", "#2b9348", "#BF6550", "#80b918", "#8C32CA", "#C61D34", "#d4d700", "#580D14", "#eeef20", "#F5B034"], // varios-
    ["#54478c", "#2c699a", "#048ba8", "#0db39e", "#16db93", "#83e377", "#b9e769", "#efea5a", "#f1c453", "#f29e4c"], //Quitar??naranjas verdes azules
    ["#ffffff", "#95eae1", "#57e0ae", "#00b899", "#0b6f55", "#000000", "#0e185e", "#1f2ac2", "#fabd38", "#cf9816"],
    ["#abcd5e", "#14976b", "#2b67af", "#62b6de", "#f589a3", "#ef562f", "#fc8405", "#f9d531", "#fffbe6", "#050505"],
["#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"]] //grises
let steps = [0.1, 10.2625, 0.6, 10.244999999999921, 10.052999999999976, 10.261999999999912, 10.262999999999911, -10.45, 10.755555, 11.204999999999977, 11.979999999999995, 15, 16.419999999999973, 16.6, 16.8, -180, 2.3, 2.4, 25.247, 33.259000000000064, -7.35551, -7.35553, 8.7, -8.7, 0.7, 1.1, 1.6, 17.75004, 1.8, 30.26399999999995, 10.420999999999824, 11.461999999999835, 16.7, 17.75000000000018, 18.7, 18.710000000000097, 2.1, 2.2, 27.228999999999854, 29.30399999999944, 29.31399999999944, 32.078999999999645, 33.56400000000022, -5.655, 6.9, 7.4, -7.4, 8.4, -8.4, -9.351, -9.352, -9.355, 10.082975, 26.179999999999435, 0.9, 11.20497, 8.3, 10, 10.00859999999998, 10.08299999999996, 10.087999999999957, 10.22899999999993, 11.519999999999802, 13.919999999999954, 14.9, 2.5, 2.6, 25.215, 25.219, 26.528999999999993, 28.818999999999537, -3.3, 30.36899999999993, 34.024000000000456, 18.570000000000075, 0.2, 11.3669, 1.2, 30.2639, 1.3, -1.3, 10.471999999999795, 11.366999999999887, 11.39699999999987, 11.9, 12.559999999999983, 14.2, 14.279999999999946, 14.28, 18.1, 30.15899999999997, 31.428999999999718, 5.1, -5.55, 6.1, -6.5555, 18.85000000000012, 18.879, 25.13, 25.131, 25.1312, 25.1313, 31.4282, 12.559999999999982, 31.428999999999717];
let img;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let sz = Math.min(WIDTH, HEIGHT);
let tokenData = genTokenData(448);
let colores = ["#f2eb8a", "#fed000", "#fc8405", "#C9C9C2", "#e2f0f3", "#b3dce0", "#4464a1", "#203051", "#ffc5c7", "#f398c3", "#9CC0E7", "#E0D7C5", "#06b4b0", "#4b8a5f", '#F2F4F8', '#0A0C08', '#e9edc9', '#fefae0', '#f1faee', '#FFF9F4', '#03071e', '#212529', '#081c15', '#EDF5FC', '#090B0B', '#121616', '#E9EDED', '#250902', '#F7DBD7'];
let colsdw = ['#1C2611', '#343a40', '#261416', '#031740'];
let tkid = tokenData.tokenId;
//let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let R = new Random(tokenData);
let xinc;// = R.random_choice([0, 1, 2, 2]);
let inph = R.random_num(-2.7, 2.7);
let cshapes = [];
let w = sz;
let mot = true;
let pntcur = R.random_dec();
let xnc2 = R.random_dec();
let rnstk2 = R.random_dec();
let sdwsn = R.random_dec();
let nrot; // = R.random_choice([1, 2, 3, 4, 2, 5]);
let t = 0;
let strk;
let rdd1 = R.random_int(10, 90);
let rdd2 = R.random_int(90, 160);
let rdinc = R.random_int(3, 8);
let rdinc1 = R.random_int(4, 7);
let sp5r = R.random_int(90, 130);
let lnth = (pntcur > 0.1) ? pntcur : 0.3;
let shp5for = R.random_int(3, 9);
let mxmn = 3;
let chcol = false;
let arrColGrad = [];
let grdStart = R.random_int(0, w / 5);
let gx1 = R.random_int(-w / 2 * 0.30, w / 2 * 0.30);
let gy1 = R.random_int(-w / 2 * 0.30, w / 2 * 0.30);
let gx2 = R.random_int(-w / 2 * 0.15, w / 2 * 0.15);
let gy2 = R.random_int(-w / 2 * 0.15, w / 2 * 0.15);
let trcol = 80;
//let lrpcol = paleta[R.random_int(0, 8)][R.random_int(0, 9)] + R.random_int(80, 100);
//let colaux = paleta[R.random_int(0, 8)][R.random_int(0, 9)];
let lrpcol;
let colaux;
let rndpal = R.random_choice(paleta);
let arlrpcol = [];
let arcolaux = [];
let idxc = 0;
let rndsp = false;
let vspeed;
let stkdv1 = 100;
let sdcol = R.random_choice(colsdw);
let offx = R.random_choice([-1, 1]);
let offy = R.random_choice([-1, 1]);


function setup() {

    createCanvas(w, w);
    img = createGraphics(w, w);
    pixelDensity(displayDensity());
    centerCanvas();
    img.ellipseMode(CORNER);

    console.log(tokenData.hash + ' - ' + tkid);
    console.log(paleta.indexOf(rndpal));

    let params = calculateFeatures(tokenData);
    console.log(params);
    nrot = params.rotations;
    strk = params.strk;
    xinc = params.xinc;

    if (nrot > 1) stkdv1 = R.random_choice([100, 200]);

    if (nrot == 1 && tkid % 2 == 0) rndsp = true;
    if (nrot == 2 && xinc == 1 && tkid % 2 == 0) rndsp = true;
    else vspeed = R.random_choice([-0.05, -0.03, 0.03, 0.05]);

    lrpcol = R.random_choice(rndpal);
    rndpal.splice(rndpal.indexOf(lrpcol), 1);
    lrpcol = lrpcol + R.random_int(80, 100)

    if (xinc == 2) {
        colaux = R.random_choice(rndpal);
        rndpal.splice(rndpal.indexOf(colaux), 1);
    }

    for (let z = 0; z < 3; z += 1) {
        arlrpcol.push(R.random_choice(rndpal));
        rndpal.splice(rndpal.indexOf(arlrpcol[z]), 1);
        arlrpcol[z] += R.random_int(trcol - 20, trcol - 10)
        if (xinc == 2) {
            arcolaux.push(R.random_choice(rndpal));
            rndpal.splice(rndpal.indexOf(arcolaux[z]), 1);
            arcolaux[z] += R.random_int(trcol - 20, trcol);
        }
        trcol -= 20;
    }

    //console.log(rndpal.toString());

    /*for (let z = 9; z < 36; z += 9) {
        let vn = (z == 9) ? 0 : 1;
        arlrpcol.push(paleta[R.random_int(z + vn, z + 9)][R.random_int(0, 9)] + R.random_int(trcol - 20, trcol - 10));
        arcolaux.push(paleta[R.random_int(z + vn, z + 9)][R.random_int(0, 9)] + R.random_int(trcol - 20, trcol));
        trcol -= 20;
    }*/

    setGradCols();

    setGrad(createVector(0, 0), w);

    makeTl();
}


function setGradCols() {
    if (arrColGrad.length > 0) arrColGrad.length = 0;
    for (let st = 0; st <= 1.0; st += 0.5) {
        //if (st == 0.5) arrColGrad.push(R.random_choice(rndpal) + R.random_int(50, 90))
        //else arrColGrad.push(R.random_choice(colores) + R.random_int(50, 90));
        arrColGrad.push(R.random_choice(colores) + R.random_int(50, 90));
    }
    //arrColGrad.push(R.random_choice(rndpal) + R.random_int(50, 90))
    
}

function setGrad(pos, rad) {
    push();
    translate(w / 2, w / 2);
    noStroke();
    let q = 0;
    let radius = w / 2;
    if (tkid % 5 == 0) grad = drawingContext.createRadialGradient(-radius, radius - grdStart, grdStart, -radius, -radius, rad);
    else if (tkid % 3 == 0) grad = drawingContext.createRadialGradient(-radius + grdStart, -radius + grdStart, grdStart, pos.x, pos.y, rad);
    else grad = drawingContext.createRadialGradient(gx1, gy1, grdStart, gx2, gy2, rad);
    for (let step = 0; step <= 1.0; step += 0.5) {
        grad.addColorStop(step, arrColGrad[q]);
        q++;
    }
    drawingContext.fillStyle = grad;
    square(-radius, -radius, w);
    pop();
}

function centerCanvas() {
    var e = document.body.style;
    e.display = "flex", e.height = "100vh", e.alignItems = "center", e.justifyContent = "center"
}

function mouseClicked() {

    if (frameCount < 95) {
        if (mot) {
            mot = false;
            noLoop();
        } else {
            mot = true;
            loop();
        }
    }
}

function genTokenData(projectNum) {
    let data = {};
    let hash = "0x";
    for (var i = 0; i < 64; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    data.hash = hash;
    data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString();
    return data;
}

function makeTl() {

    //nrot = 3;
    //strk = 1;
    //xinc = 2;
    //lnth = 0.2;
    //inph = -2.7;
    let tp = R.random_choice(steps);
    let npoints = R.random_int(1500, 2500);
    img.noiseSeed(floor(R.random_num(0, 10e6)));
    img.translate(w / 2, w / 2);

    if (Math.floor(w) != 657) {
        let dif = (w - 657) / 657
        let prc = dif + 1;
        img.scale(prc);
    }

    console.log(' inph: ' + inph + ' pntcur: ' + pntcur + ' - strk:' + strk + ' - xinc:' + xinc + ' - nrot:' + nrot + ' - sp5r:' + sp5r + ' - mxmn:' + mxmn + ' - points:' + npoints);

    for (let i = 0; i < npoints; i++) {
        cshapes.push(new cshape(tp, i, npoints))
    }
}

class cshape {
    constructor(seed, n, np) {
        this.rseed = seed;
        this.col = lrpcol;
        this.n = n;
        this.np = np;
        this.chcol = false;
        this.ph = inph;
        this.inde = 'inc';
        this.speed = (rndsp) ? R.random_num(0.01, 0.06) : vspeed;
    }

    show() {

        if (this.chcol) { this.col = lrpcol; }

        img.stroke(this.col);

        if (sdwsn > 0.5) {
            img.drawingContext.shadowColor = sdcol;
            img.drawingContext.shadowOffsetX = offx;
            img.drawingContext.shadowOffsetY = offy;
            img.drawingContext.shadowBlur = 0;
        }

        shape(this.ph, this.rseed, this.n, this.np);
        if (this.inde == 'des') { this.ph -= this.speed; } else { this.ph += this.speed }

        if (this.ph >= mxmn) this.inde = 'des'
        if (this.ph <= -mxmn) this.inde = 'inc'
    }

    changeCol(val) { this.chcol = val; }

}

function shape(ph, seed, n, np) {
    let x;
    let s = frameCount * 120.27; 
    for (let i = 0; i < sp5r; i += shp5for) {
        img.rotate(PI / nrot);
        let r1 = (657 / rdd1) + sin(i * 10 + ph) * rdd2;
        t += seed;
        switch (true) {
            case (strk == 0):
                x = 166 * sin((s - t * 17.7) * 0.000375) / r1;
                break;
            case (strk == 1):
                switch (true) {
                    case (rnstk2 < 0.5):
                        x = sin(t) * (i / stkdv1) * r1;
                        break;
                    case (rnstk2 < 0.75):
                        x = sin(t) * (i / stkdv1) * r1 * cos(i);
                        break;
                    default:
                        x = sin(t) * (i / stkdv1) * r1 * sin(i);
                        break;
                }
                break;
        }
        switch (true) {
            case (xinc == 0):
                img.strokeWeight(lnth);
                img.noFill();
                img.circle(x * 2.5, i * ph, rdinc1 / 3);
                break;
            case (xinc == 1):
                img.strokeWeight(lnth);
                img.point(x * 2.5, i * ph);
                break;
            case (xinc == 2):
                let vr = (pntcur > 0.6) ? i * (ph * 0.5) : i / (ph / 0.5);
                let xn = (xnc2 >= 0.5) ? -1 : 1; 
                img.strokeWeight(lnth);
                if (n < np / 5) { img.stroke(colaux); img.line(x, i, x * xn, vr); }
                else { img.noFill(); img.stroke(lrpcol); img.circle(x * 2.5, i * ph, rdinc1 / 3); }
                break;
        }
    }
}

function draw() {

    if (frameCount >= 95) {
        mot = false;
        noLoop();
    }
    if (frameCount % 26 == 0) {
        chcol = true;
        lrpcol = arlrpcol[idxc];
        if (xinc == 2) colaux = arcolaux[idxc];
        idxc++;
    }
    cshapes.forEach(function (cs) {
        if (chcol) cs.changeCol(true); else cs.changeCol(false);
        cs.show();
    });
    chcol = false;

    setGrad(createVector(0, 0), w);

    imgClone = img.get();
    image(imgClone, 0, 0);

}

