class Random {
    constructor(e) {
        this.seed = e
    }
    random_dec() {
        return this.seed ^= this.seed << 13, this.seed ^= this.seed >> 17, this.seed ^= this.seed << 5, (this.seed < 0 ? 1 + ~this.seed : this.seed) % 1e3 / 1e3
    }
    random_num(e, r) {
        return e + (r - e) * this.random_dec()
    }
    random_int(e, r) {
        return Math.floor(this.random_num(e, r + 1))
    }
    random_choice(e) {
        return e[Math.floor(this.random_num(0, .99 * e.length))]
    }
}
let paleta = [["#03045e", "#023e8a", "#0077b6", "#0096c7", "#00b4d8", "#48cae4", "#90e0ef", "#ade8f4", "#caf0f8", "#D9F1F6"],
["#03071e", "#370617", "#6a040f", "#9d0208", "#d00000", "#dc2f02", "#e85d04", "#f48c06", "#faa307", "#F5B034"],
["#ffba08", "#f8f9fa", "#e9ecef", "#dee2e6", "#ced4da", "#adb5bd", "#6c757d", "#495057", "#343a40", "#212529"],
["#001219", "#005f73", "#0a9396", "#94d2bd", "#e9d8a6", "#ee9b00", "#ca6702", "#bb3e03", "#ae2012", "#9b2226"],
["#582f0e", "#7f4f24", "#936639", "#a68a64", "#b6ad90", "#c2c5aa", "#a4ac86", "#656d4a", "#414833", "#333d29"],
["#10002b", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd", "#c77dff", "#e0aaff", "#E3B9FB", "#D9C5E5"],
["#590d22", "#800f2f", "#a4133c", "#c9184a", "#ff4d6d", "#ff758f", "#ff8fa3", "#ffb3c1", "#ffccd5", "#fff0f3"],
["#ffedd8", "#f3d5b5", "#e7bc91", "#d4a276", "#bc8a5f", "#a47148", "#8b5e34", "#6f4518", "#603808", "#583101"],
["#007f5f", "#2b9348", "#55a630", "#80b918", "#aacc00", "#bfd200", "#d4d700", "#dddf00", "#eeef20", "#ffff3f"],
["#e8a598", "#ffb5a7", "#fec5bb", "#fcd5ce", "#fae1dd", "#f8edeb", "#f9e5d8", "#f9dcc4", "#fcd2af", "#fec89a"],
["#ff0a54", "#ff477e", "#ff5c8a", "#ff7096", "#ff85a1", "#ff99ac", "#fbb1bd", "#f9bec7", "#f7cad0", "#fae0e4"],
["#ff7b00", "#ff8800", "#ff9500", "#ffa200", "#ffaa00", "#ffb700", "#ffc300", "#ffd000", "#ffdd00", "#ffea00"],
["#d8f3dc", "#b7e4c7", "#95d5b2", "#74c69d", "#52b788", "#40916c", "#2d6a4f", "#0C6A40", "#5A9077", "#5FD49D"],
["#ff6d00", "#ff7900", "#ff8500", "#ff9100", "#ff9e00", "#240046", "#3c096c", "#5a189a", "#7b2cbf", "#9d4edd"],
["#99e2b4", "#88d4ab", "#78c6a3", "#67b99a", "#56ab91", "#469d89", "#358f80", "#248277", "#14746f", "#036666"],
["#757bc8", "#8187dc", "#8e94f2", "#9fa0ff", "#ada7ff", "#bbadff", "#cbb2fe", "#dab6fc", "#ddbdfc", "#e0c3fc"],
["#7A5D41", "#C4B4A8", "#59ADCC", "#F9A50B", "#DDE3E1", "#A75506", "#2C5838", "#371A0A", "#739384", "#130C0B"],
["#105F85", "#2C5838", "#7F7168", "#371A0A", "#F9A50B", "#A75506", "#59ADCC", "#C6A076", "#739384", "#89520E"],
["#576A7C", "#16141A", "#553920", "#82624C", "#B8B2AE", "#774B24", "#ECEDEA", "#BFC4CC", "#DCD8D1", "#8AAFC7"],
["#8AAFC7", "#BFC4CC", "#A09083", "#774B24", "#585150", "#D1CAC4", "#DCD8D1", "#82624C", "#D8DBE1", "#8198A5"],
["#8AAFC7", "#553920", "#A09083", "#585150", "#16141A", "#82624C", "#BFC4CC", "#493D3B", "#576A7C", "#100908"],
["#AD666A", "#A28471", "#CC8F75", "#4B4F51", "#3F3236", "#48403D", "#CE9292", "#70625D", "#191312", "#A89491"],
["#2A272C", "#E6C2C0", "#CC8F75", "#E1A69F", "#48403D", "#A28471", "#191312", "#CCC3BD", "#A89491", "#432C24"],
["#CCC3BD", "#EFE6E2", "#C5B09F", "#3F3236", "#2A272C", "#A89491", "#E1A69F", "#432C24", "#AD666A", "#191312"],
["#64757E", "#A48151", "#E4EDF2", "#090707", "#968A7D", "#0A1929", "#D2A979", "#1D1A11", "#3E3120", "#000410"],
["#968A7D", "#1D1A11", "#00132A", "#A48151", "#9DB2BD", "#E4EDF2", "#3E3120", "#CACCCD", "#000410", "#5C5A52"],
["#A48151", "#103347", "#5C5A52", "#3E3120", "#D2A979", "#968A7D", "#00132A", "#266070", "#090707", "#D79D54"],
["#DF4E0A", "#B21704", "#EEA010", "#BD610A", "#303B52", "#B23E08", "#5E1F06", "#537C0B", "#A0663E", "#6FAD9E"],
["#F6BA11", "#E39D4B", "#9F630C", "#B21704", "#6FAD9E", "#F1C55D", "#BD610A", "#303B52", "#C37D0E", "#E5870E"],
["#EEA010", "#DF4E0A", "#B21704", "#537C0B", "#F4E5C7", "#F1C55D", "#B69145", "#E39D4B", "#EED198", "#6FAD9E"],
["#10AC4B", "#E2BCB1", "#53A408", "#B2C12B", "#EBDEA3", "#20C282", "#222124", "#C58C2D", "#274FAA", "#0B682D"],
["#222124", "#E7C02C", "#4F2A9A", "#EBDEA3", "#4C3033", "#B2C12B", "#E2B07F", "#0B682D", "#54A243", "#274FAA"],
["#A6B996", "#4C3033", "#E7C02C", "#0B682D", "#8562CA", "#97F209", "#F6F4F2", "#8F7791", "#B2C12B", "#EBDEA3"],
["#9b5de5", "#f15bb5", "#fee440", "#00bbf9", "#00f5d4", "#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"],
["#FA053F", "#FEB200", "#03FDBC", "#04BEFB", "#06617F", "#ef476f", "#ffd166", "#06d6a0", "#118ab2", "#073b4c"],
["#C2C8D4", "#2b9348", "#BF6550", "#80b918", "#8C32CA", "#C61D34", "#d4d700", "#580D14", "#eeef20", "#C70A27"],
["#54478c", "#2c699a", "#048ba8", "#0db39e", "#16db93", "#83e377", "#b9e769", "#efea5a", "#f1c453", "#f29e4c"]];
let shg = [0.1, 10.2625, 0.6, 10.244999999999921, 10.052999999999976, 10.261999999999912, 10.262999999999911, -10.45, 10.755555, 11.204999999999977, 11.979999999999995, 15, 16.419999999999973, 16.6, 16.8, -180, 2.3, 2.4, 25.247, 33.259000000000064, -7.35551, -7.35553, 8.7, -8.7];
let shm = [0.7, 1.1, 1.6, 17.75004, 1.8, 30.26399999999995, 10.420999999999824, 11.461999999999835, 16.7, 17.75000000000018, 18.7, 18.710000000000097, 2.1, 2.2, 27.228999999999854, 29.30399999999944, 29.31399999999944, 32.078999999999645, 33.56400000000022, -5.655, 6.9, 7.4, -7.4, 8.4, -8.4, -9.351, -9.352, -9.355];
let shmg = [10.082975, 26.179999999999435, 0.9, 11.20497, 8.3, 10, 10.00859999999998, 10.08299999999996, 10.087999999999957, 10.22899999999993, 11.519999999999802, 13.919999999999954, 14.9, 2.5, 2.6, 25.215, 25.219, 26.528999999999993, 28.818999999999537, -3.3, 30.36899999999993, 34.024000000000456];
let shp = [18.570000000000075, 0.2, 11.3669, 1.2, 30.2639, 1.3, -1.3, 10.471999999999795, 11.366999999999887, 11.39699999999987, 11.9, 12.559999999999983, 14.2, 14.279999999999946, 14.28, 18.1, 30.15899999999997, 31.428999999999718, 5.1, -5.55, 6.1, -6.5555];
let shmp = [18.85000000000012, 18.879, 25.13, 25.131, 25.1312, 25.1313, 31.4282, 12.559999999999982, 31.428999999999717];
let steps = shg.concat(shm, shmg, shp, shmp);
let img;
let WIDTH = window.innerWidth;
let HEIGHT = window.innerHeight;
let sz = Math.min(WIDTH, HEIGHT);
let palette;
let tokenData = genTokenData(448);
let noiseScale = 9e-11;
let bgcols = ['#F2F4F8', '#0A0C08', '#e9edc9', '#fefae0', '#f1faee', '#FFF9F4', '#03071e', '#212529', '#081c15', '#EDF5FC', '#090B0B', '#121616', '#E9EDED', '#250902', '#43291f'];
let tkid = tokenData.tokenId;
let seed = parseInt(tokenData.hash.slice(0, 16), 16)
let R = new Random(seed);
let xinc = R.random_int(0, 12);
let inph = R.random_num(-2.7, 2.7);
let cshapes = [];
let w = sz;
let mot = false;
let bgcolor = R.random_choice(bgcols);
let pntcur = R.random_dec();
let nrot = R.random_int(5, 25);
let t = 0;
let rdd1 = R.random_int(10, 90);//R.random_int(10,128);//R.random_choice([8, 16, 32, 64, 128]);
let rdd2 = R.random_int(90, 160);//R.random_int(10, 90);//R.random_choice([10, 20, 30, 40, 50, 60, 70, 80, 90]);
let rdinc = R.random_int(2, 4);
let rdinc1 = R.random_int(4, 7);
let rdiv = R.random_choice([1, 2]);
let sp5r = R.random_int(85, 120);
let strk = R.random_dec();
let lnth = (strk > 0.2) ? strk : 0.5;
let shp5for = R.random_choice([5, 10, 15, 20]);
let mxmn = 3.5;
let chcol = false;
let dly = 3;
let itemsTime = [];
let noiseFilter;

function setup() {

    createCanvas(w, w);
    img = createGraphics(w, w);
    pixelDensity(displayDensity());
    frameRate(20);
    //if (strk < 0.26) frameRate(10);
    centerCanvas();
    ellipseMode(CORNER);
    let colArr = [];
    let ncols = 10;
    console.log(tokenData.hash + ' - ' + tkid);
    if (rdiv == 1) {
        for (t = 0; t < ncols; t++) {
            colArr.push(R.random_choice(paleta)[R.random_int(0, 9)]);
        }
    } else {
        colArr = R.random_choice(paleta);
    }

    palette = colArr;
    background(bgcolor);

    noiseFilter = createImage(w, w);
    noiseFilter.loadPixels();
    let pix = noiseFilter.width * noiseFilter.height * 4;
    for (let i = 0; i < pix; i += 4) {
        noiseFilter.pixels[i] = random(255);
        noiseFilter.pixels[i + 1] = random(255);
        noiseFilter.pixels[i + 2] = random(255);
        noiseFilter.pixels[i + 3] = 50;
    }
    noiseFilter.updatePixels();

    noLoop();
    makeTl();
}

function centerCanvas() {
    var e = document.body.style;
    e.display = "flex", e.height = "100vh", e.alignItems = "center", e.justifyContent = "center"
}

function keyPressed() {
    if (key == 'c') {
        chcol=true;
    }
    if (key == 'b') {
        bgcolor = R.random_choice(bgcols);
    }
}

function mouseClicked() {
    if (mot) {
        mot = false;
        noLoop();
    } else {
        mot = true;
        loop();
    }
}

function genTokenData(projectNum) {
    let data = {};
    let hash = "0x";
    for (var i = 0; i < 64; i++) {
        hash += Math.floor(Math.random() * 16).toString(16);
    }
    data.hash = hash; //'0xa047e4e884341d34a6a082d04e5cba6ce086b60a1e3de13a0db775c3cb048b9a';
    data.tokenId = (projectNum * 1000000 + Math.floor(Math.random() * 1000)).toString(); //448000745
    return data;
}

function makeTl() {

    //xinc = 0;
    //strk = 0.85;
    let tp = R.random_choice(steps);
    let n = R.random_int(5, 50);
    let alph = R.random_int(75, 255);
    let npoints = R.random_int(500, 1500);
    let mapP = int(npoints * 0.6);
    let x, y;
    let fr = 0.15;
    let radius = sz * 0.00;
    let t = 0;
    let rd1 = R.random_num(0, 75);
    let rd2 = R.random_num(0, 55);
    let color;

    img.noiseSeed(floor(R.random_num(0, 10e6)));
    img.translate(w / 2, w / 2);

    if (Math.floor(w) != 657) {
        let dif = (w - 657) / 657
        let prc;
        if (dif < 0) prc = -(dif + 1);
        else prc = dif + 1;
        img.scale(prc);
    }

    if (npoints <= 750) { dly = 9; }
    else if (npoints <= 1000) { dly = 7; }
    else if (npoints <= 1250) { dly = 5; }

    console.log(' inph: ' + inph + ' shp5for: ' + shp5for + ' - step:' + tp + ' - xinc:' + xinc + ' - nrot:' + nrot + ' - strk:' + strk + ' - rdd1:' + rdd1 + ' - rdd2:' + rdd2 + ' - points:' + npoints);

    for (let i = 0; i < npoints - 1; i++) {
        let size = map((i / mapP) ** 0.8, 0, 1, sz * fr, 0);

        let d = R.random_num(radius / 2, radius / R.random_int(1, 8)); 
        x = rd1 * R.random_num(-d, d) / t;
        y = rd2 * R.random_num(-d, d) / t;

        if (floor(x / sz * n) % 2 == 0) {
            color = lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette.reverse(), alph);
        } else {
            color = lerpColorScheme(curlNoise(x * noiseScale, (y + 0) * noiseScale, 0), palette, alph);
        }
        cshapes.push(new cshape(x, y, tp, color, size, i, alph, npoints))
        itemsTime.push(0);

        t += R.random_num(20, 30);
        if (radius < sz) {
            radius += R.random_num(1, 3);
        }
    }
}

function getNewPal() {
    let pal = [];
    if (R.random_dec() < 0.5) { pal = R.random_choice(paleta); }
    else {
        for (t = 0; t < 10; t++) {
            pal.push(R.random_choice(paleta)[R.random_int(0, 9)]);
        }
    }
    return pal;
}

class cshape {
    constructor(x, y, seed, color, size, n, alph, np) {
        this.x = x;
        this.y = y;
        this.rseed = seed;
        this.col = color;
        this.sz = size;
        this.ang = 0;
        this.n = n;
        this.np = np;
        this.alph = alph;
        this.chcol = false;
        this.ph = inph;
        this.inde = 'inc';
        this.chstrk = false;
        this.stk = strk;
    }
    
    show() {

        if (this.chcol) {
            if (this.n == 0) { palette = getNewPal(); }
            if (floor(this.x / this.sz * this.n) % 2 == 0) {
                this.col = lerpColorScheme(curlNoise(this.x * noiseScale, (this.y + 0) * noiseScale, 0), palette.reverse(), this.alph); //colores[this.rdlrpal]
            } else {
                this.col = lerpColorScheme(curlNoise(this.x * noiseScale, (this.y + 0) * noiseScale, 0), palette, this.alph);
            }
        }

        img.stroke(this.col);

        if (this.chstrk) {
            if (this.n == 0) { mxmn = R.random_int(4, 6); strk = Math.random().toFixed(2); console.log(strk + ' - ' + frameCount);}
        }

        shape(this.ph, this.rseed, this.n, this.np, this.stk);
        if (this.inde == 'des') { this.ph -= 0.05; } else { this.ph += 0.05 }

        if (this.ph >= mxmn) this.inde = 'des'
        if (this.ph <= -mxmn) this.inde = 'inc'
    }

    changeCol(val) {this.chcol = val;}

    changeStrk(val) {this.chstrk = val;}

    getStk() { return this.stk; }
    setStk(val) { this.stk = val;}


    init() {}
}

function shape(ph, seed, n, np, stk) {
    let x;
    let pitau = (pntcur < 0.5) ? PI : TAU;
    img.rotate(pitau / nrot);
    for (let i = 0; i < sp5r; i += shp5for) {
        let r1 = (w / rdd1) + sin(i * 10 + ph) * rdd2;
        t += seed;
        switch (true) {
            case (stk >= 0.8):
                //x = tan(i / r1 + frameCount / 100) * (w / 10);
                x = (w / 10) + r1 * sin(map(i, 0, i - 1, 0, pitau)) * sin(t);
                break;
            case (stk >= 0.61):
                x = cos(radians(i * 10)) * r1
                break;
            case (stk >= 0.49):
                x = sin(frameCount / 10) * r1
                break;
            case (stk >= 0.33):
                x = cos(t - frameCount * 3) * r1;
                break;
            case (stk >= 0.19):
                x = sin(t) * (i / 100) * r1;
                break;
            default:
                x = sin(t) * r1;
                break;
        }
        switch (true) {
            
            case (xinc == 0):
                img.strokeWeight(lnth);
                img.line(x * 2, i * ph, x, i * ph);
                break;
            case (xinc == 1):
                img.strokeWeight(lnth);
                //if (inph <= 1.4 && inph >= -1.4) img.line(x*ph, i * 2, x, i * 3);
                //else img.line(x, i * 2.5, x, i * 3);
                img.line(x, i * 2.5, x, i * 3);
                break;
            case (xinc == 2):
                img.strokeWeight(lnth);
                if (n < np / 3) { img.line(x, i, x, i * 2); }
                else { img.noFill(); img.circle(x * 2.5, i, rdinc1); }
                break;
            case (xinc == 3):
                img.strokeWeight(lnth);
                if (n % 4 == 0) { img.line(x, i, x, i * 2); }
                else { img.noFill(); img.circle(x * 2.5, i*ph, rdinc1); }
                break;
            case (xinc == 4):
                if (n % 4 == 0) { img.strokeWeight(lnth); img.line(x, i, x * 2, i); }
                else { img.strokeWeight(rdinc); img.point(x*ph, i * 2.5); }
                break;
            case (xinc == 5):
                img.strokeWeight(rdinc);
                img.point(x, i * 2.5);
                break;
            case (xinc == 6):
                img.strokeWeight(rdinc);
                img.point(x*ph, i * 2.5);
                break;
            case (xinc == 7):
                if (n < np / 3) { img.strokeWeight(lnth); img.line(x, i*ph, x, i * 2); }
                else { img.strokeWeight(rdinc); img.point(x, i * 2.5); }
                break;
            case (xinc == 8):
                img.strokeWeight(lnth);
                img.noFill();
                if (inph >= 1.4 && inph <= -1.4) img.circle(x * ph, i * 2.5, rdinc1);
                else img.circle(x, i * 2.5, rdinc1);
                break;
            case (xinc == 9):
                img.strokeWeight(lnth);
                img.noFill();
                img.circle(x * 2.5, i*ph, rdinc1);
                break;
            case (xinc == 10):
                img.strokeWeight(lnth);
                img.noFill();
                if (inph <= 1 && inph >= -1) img.rect(x * ph, i * 2.5, 5, 15);
                else img.rect(x, i * 2.5, 5, 15);
                break;
            case (xinc == 11):
                img.strokeWeight(lnth);
                img.noFill();
                if (inph <= 1 && inph >= -1) img.rect(x * ph, i * 2.5, 15, 5);
                else img.rect(x, i * 2.5, 15, 5);
                break;
            case (xinc == 12):
                img.strokeWeight(lnth);
                img.noFill();
                img.arc(x * 1.5, i*ph, x * 2, i, 0 + ph, PI / 4 + ph);
                break;
            //if (inph >= -1.5 && inph <= 1.5) img.line(x * 2, i * ph, x, i * ph);
            //case (xinc == 18):
            //    img.strokeWeight(lnth);
            //    img.line(x, i * 2, x * ph, i * 3);
            //    break;
            //else img.line(x * 2, i * ph, x, i * 2);
            //case (xinc == 0):
                //img.strokeWeight(lnth);
                //if (inph <= 1.2 && inph >= -1.2) img.line(x * ph, i, x * ph, i * 2);
                //else img.line(x * 2, i, x * ph, i * 2);
                //img.line(x * 2, i, x * ph, i * 2);
                //break;
            //case (xinc == 1):
            //    img.strokeWeight(lnth);
            //    img.line(x, i * ph, x * 2, i);
            //    break;
            //case (xinc == 15):
            //    img.strokeWeight(lnth);
            //    img.line(x, i, x * 2, i * ph);
            //    break;
            //case (xinc == 1):
            //    img.strokeWeight(lnth);
            //    img.line(x * 2.2, i, x * 2, i);
            //    break;
            //case (xinc == 16):
            //    img.strokeWeight(lnth);
            //    img.line(x * 2.2, i, x * 2, i*ph);
            //    break;
            //case (xinc == 17):
            //    img.strokeWeight(lnth);
            //    img.line(x * 2.2, i * ph, x * 2, i);
            //    break;
            //case (xinc == 12):
            //    img.strokeWeight(lnth);
            //    img.noFill();
            //    img.arc(x, i * 2, x, i * 3, 0 + ph, PI / 4 + ph);
            //    break;
            //case (xinc == 13):
            //    img.strokeWeight(lnth);
            //    img.noFill();
            //    img.arc(x, i * 2.5, x-ph, i * 3, PI - (ph * 0.8), TWO_PI * 0.7 - ph);
            //    break;
            //default:
            //    img.strokeWeight(lnth);
            //    img.noFill();
            //    img.arc(x * 2, i, x * 2, i * ph, PI - (ph * 0.8), TWO_PI * 0.7 - ph);
            //    break;
        }
    }
}

function draw() {

    background(bgcolor);
    img.clear();

    let delay = 0;
    cshapes.forEach(function (cs) {
        if (chcol) cs.changeCol(true); else cs.changeCol(false);
        if (frameCount % 160 == 0) {
            cs.changeStrk(true);
            if (cs.getStk() == strk) {
                if (itemsTime[cshapes.indexOf(cs)]) clearTimeout(itemsTime[cshapes.indexOf(cs)]);
            } else {
                itemsTime[cshapes.indexOf(cs)] = setTimeout(function () { cs.setStk(strk); }, delay);
            }
            delay += dly;
        } else
        { cs.changeStrk(false) };
        
        cs.show();
    });
    chcol = false;

    image(noiseFilter, 0, 0);
    imgClone = img.get();
    image(imgClone, 0, 0);
    
}

function createLgradient(col1, col2){
    noStroke();
    var gradbg = drawingContext.createLinearGradient(0, 0, width, 0);
    gradbg.addColorStop(0, col1);
    gradbg.addColorStop(1, col2);
    drawingContext.fillStyle = gradbg;
    rect(0, 0, w, w);
}

function lerpColorScheme(n, colors, alph) {
    let i = n * (colors.length) % (colors.length);
    let color1 = color(colors[floor(i)]);
    let color2 = color(colors[(floor(i) + 1) % colors.length]);
    color1.setAlpha(alph);
    color2.setAlpha(alph);
    return lerpColor(color1, color2, i % 1);
}

function curlNoise(x, y, z) {
    const eps = 0.0000001;
    let n1, n2, a, b;
    x = x / eps;
    y = y / eps;
    n1 = noise(x, y + eps, z);
    n2 = noise(x, y - eps, z);
    a = (n1 - n2) / (2 * eps);

    n1 = noise(x + eps, y, z);
    n2 = noise(x - eps, y, z);

    b = (n1 - n2) / (2 * eps);

    let angle = createVector(a, -b).heading();
    if (angle < 0) angle += TAU;
    return angle / TAU;

}