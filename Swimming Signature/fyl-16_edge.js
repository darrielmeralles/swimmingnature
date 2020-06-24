(function($, Edge, compId) {
    var _ = null,
        y = true,
        n = false,
        x66 = 'yes-1',
        e13 = '${_back-4}',
        e14 = '${_back-46}',
        x1 = '2.0.1',
        a = 'Base State',
        e19 = '${_no5}',
        e21 = '${_frame-1-copy}',
        dt = 'Default Timeline',
        e24 = '${_qu-five-copy}',
        x62 = '413px',
        e27 = '${_qu-three-copy}',
        x64 = '36px',
        e59 = '${_start-fyl}',
        e34 = '${_yes6}',
        e36 = '${_back-42}',
        e32 = '${_no2}',
        bg = 'background-color',
        x56 = 'auto',
        e41 = '${_yes}',
        e42 = '${_no6}',
        x8 = 'rgba(255,255,255,1)',
        tp = 'top',
        e45 = '${_no3}',
        ov = 'overflow',
        e9 = '${_Stage}',
        x5 = 'stage',
        e51 = '${_croc-result}',
        e11 = '${_back-47}',
        e12 = '${_fyl}',
        e29 = '${_penguin-result}',
        x4 = 'rgba(0,0,0,0)',
        e37 = '${_yes2}',
        e16 = '${_no7}',
        e17 = '${_qu-four-copy}',
        e18 = '${_qu-one}',
        x65 = 'fyl-child-assets/yes.png',
        x63 = '70px',
        e23 = '${_qu-two-copy}',
        e60 = '${symbolSelector}',
        e33 = '${_crab-result2}',
        x58 = 'Symbol_1',
        m = 'rect',
        e22 = '${_youarefrog}',
        x57 = 'fyl-child-assets/start-fyl.png',
        x2 = '2.0.0',
        e43 = '${_frog}',
        x54 = '88px',
        x53 = '0px',
        e25 = '${_yes4}',
        x52 = 'start-fyl',
        x61 = 'yes',
        e26 = '${_yes7}',
        s = 'style',
        o = 'opacity',
        lf = 'left',
        c = 'color',
        e47 = '${_areyoua}',
        e46 = '${_no}',
        e30 = '${_back-44}',
        e31 = '${_no4}',
        g = 'image',
        e44 = '${_sword-result}',
        x55 = '38px',
        e15 = '${_start}',
        e39 = '${_youarefrogcopy2}',
        e38 = '${_turtle-result}',
        e7 = '${_bg-3}',
        x10 = 'hidden',
        e40 = '${_seal-result}',
        e20 = '${_back-45}',
        e28 = '${_qu-six-copy}',
        w = 'width',
        x3 = '2.0.1.268',
        e35 = '${_yes3}',
        ql = 'linear',
        x6 = 'pointer',
        e48 = '${_back-43}',
        e49 = '${_yes5}',
        e50 = '${_qu-seven-copy}',
        h = 'height';
    var im = 'images/';
    var fonts = {};
    var P = Edge.P,
        T = Edge.T,
        A = Edge.A;
    var resources = [];
    var symbols = {
        "stage": {
            v: x1,
            mv: x2,
            b: x3,
            bS: a,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    id: 'bg-3',
                    t: g,
                    r: ['111px', '40px', '547px', '476px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/bg-3.png', '0px', '0px']
                }, {
                    id: 'areyoua',
                    t: g,
                    r: ['292px', '136px', '185px', '47px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/areyoua.png', '0px', '0px']
                }, {
                    id: 'fyl',
                    t: g,
                    r: ['269px', '135px', '232px', '50px', 'auto', 'auto'],
                    o: 1,
                    f: [x4, 'fyl-child-assets/fyl.png', '0px', '0px']
                }, {
                    id: 'frame-1-copy',
                    t: g,
                    r: ['222px', '220px', '326px', '144px', 'auto', 'auto'],
                    o: 1,
                    f: [x4, 'fyl-child-assets/frame-1-copy.png', '0px', '0px']
                }, {
                    id: 'qu-one',
                    t: g,
                    r: ['231px', '246px', '308px', '64px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-one.png', '0px', '0px']
                }, {
                    id: 'frog',
                    t: g,
                    r: ['163px', '125px', '157px', '145px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/frog.png', '0px', '0px']
                }, {
                    id: 'back-4',
                    t: g,
                    r: ['344px', '407px', '82px', '36px', 'auto', 'auto'],
                    cu: ['pointer'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'qu-two-copy',
                    t: g,
                    r: ['162px', '227px', '427px', '102px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-two-copy.png', '0px', '0px']
                }, {
                    id: 'qu-three-copy',
                    t: g,
                    r: ['237px', '220px', '277px', '55px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-three-copy.png', '0px', '0px']
                }, {
                    id: 'start',
                    t: m,
                    r: ['341', '406', 'auto', 'auto', 'auto', 'auto']
                }, {
                    id: 'youarefrog',
                    t: g,
                    r: ['360px', '207px', '188px', '48px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/youarefrog.png', '0px', '0px']
                }, {
                    id: 'youarefrogcopy2',
                    t: g,
                    r: ['191px', '255px', '387px', '133px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/youarefrogcopy.png', '0px', '0px']
                }, {
                    id: 'yes',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'qu-four-copy',
                    t: g,
                    r: ['179px', '208px', '400px', '140px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-four-copy.png', '0px', '0px']
                }, {
                    id: 'qu-five-copy',
                    t: g,
                    r: ['184px', '205px', '400px', '140px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-five-copy.png', '0px', '0px']
                }, {
                    id: 'qu-six-copy',
                    t: g,
                    r: ['185px', '215px', '400px', '140px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-six-copy.png', '0px', '0px']
                }, {
                    id: 'qu-seven-copy',
                    t: g,
                    r: ['185px', '231px', '400px', '140px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/qu-seven-copy.png', '0px', '0px']
                }, {
                    id: 'no',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'yes2',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'yes3',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'yes4',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'yes5',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'yes6',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'seal-result',
                    t: g,
                    r: ['68px', '37px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/seal-result.png', '0px', '0px']
                }, {
                    id: 'yes7',
                    t: g,
                    r: ['292px', '407px', '70px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/yes.png', '0px', '0px']
                }, {
                    id: 'crab-result2',
                    t: g,
                    r: ['71px', '37px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/crab-result.png', '0px', '0px']
                }, {
                    id: 'penguin-result',
                    t: g,
                    r: ['77px', '37px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/penguin-result.png', '0px', '0px']
                }, {
                    id: 'turtle-result',
                    t: g,
                    r: ['70px', '37px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/turtle-result.png', '0px', '0px']
                }, {
                    id: 'croc-result',
                    t: g,
                    r: ['70px', '40px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/croc-result.png', '0px', '0px']
                }, {
                    id: 'sword-result',
                    t: g,
                    r: ['68px', '37px', '615px', '496px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/sword-result.png', '0px', '0px']
                }, {
                    id: 'no2',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'no3',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'no4',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'no5',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'no6',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'no7',
                    t: g,
                    r: ['406px', '407px', '71px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/no.png', '0px', '0px']
                }, {
                    id: 'back-42',
                    t: g,
                    r: ['345px', '406px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'back-43',
                    t: g,
                    r: ['345px', '406px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'back-44',
                    t: g,
                    r: ['345px', '406px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'back-45',
                    t: g,
                    r: ['345px', '406px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'back-46',
                    t: g,
                    r: ['345px', '406px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }, {
                    id: 'back-47',
                    t: g,
                    r: ['345px', '407px', '82px', '36px', 'auto', 'auto'],
                    f: [x4, 'fyl-child-assets/back-4.png', '0px', '0px']
                }],
                sI: [{
                    id: 'start',
                    sN: 'Symbol_1'
                }]
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 5389,
                    a: y,
                    l: {
                        "index": 0,
                        "question-one": 1000,
                        "question-one-no": 1500,
                        "question-two": 2000,
                        "question-three": 2250,
                        "question-four": 2500,
                        "question-five": 2839,
                        "question-six": 3225,
                        "question-seven": 3480,
                        "question-two-no": 3751,
                        "question-three-no": 4000,
                        "question-four-no": 4250,
                        "question-five-no": 4545,
                        "question-six-no": 4873,
                        "question-seven-no": 5193
                    },
                    tt: []
                }
            }
        },
        "Symbol_1": {
            v: x1,
            mv: x2,
            b: x3,
            bS: a,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    t: g,
                    id: x52,
                    r: [x53, x53, x54, x55, x56, x56],
                    cu: [x6],
                    f: [x4, x57, x53, x53]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 0,
                    a: y,
                    tt: []
                }
            }
        },
        "yes-1": {
            v: x1,
            mv: x2,
            b: x3,
            bS: a,
            iS: a,
            gpu: n,
            rI: n,
            cn: {
                dom: [{
                    t: g,
                    id: x61,
                    r: [x62, x53, x63, x64, x56, x56],
                    cu: [x6],
                    f: [x4, x65, x53, x53]
                }],
                sI: []
            },
            s: {},
            tl: {
                "Default Timeline": {
                    fS: a,
                    tS: "",
                    d: 2231,
                    a: y,
                    tt: []
                }
            }
        }
    };
    var S1 = symbols[x5];
    var tl0 = S1.tl[dt].tt,
        st1 = S1.s[a] = {},
        A1 = A(_, tl0, st1);
    A1.A(e7).P(tp, 40).P(lf, 111);
    A1.A(e9).P(bg, x8, c).P(ov, x10).P(h, 555).P(w, 770);
    A1.A(e11).P(tp, 407).P(lf, -94).T(5.174, 345, 0.019, ql).T(5.365, -130, 0.024);
    A1.A(e12).P(tp, 135).P(lf, 269).P(o, 0, _, _, "").T(1.091, 1, 0.114, ql);
    A1.A(e13).P(tp, 407).P("cursor", x6).P(lf, -96).T(1.685, 344, 0.011, ql).T(1.867, -101, _, _, -101).P(o, 0, _, _, "").T(1.696, 1, 0.106);
    A1.A(e14).P(tp, 406).P(lf, -90).T(4.85, 345, 0.023, ql).T(5.035, -91, 0.016);
    A1.A(e15).P(lf, 341).T(1.051, -142, 0.017, ql).P(o, 1, _, _, "").T(1, 0, 0.068);
    A1.A(e16).P(tp, 407).P(lf, -86).T(3.462, 406, 0.018, ql).T(3.634, -107, 0.016);
    A1.A(e17).P(tp, 208).P(lf, -463).T(2.483, 179, 0.017, ql).T(2.658, -406, 0.016);
    A1.A(e18).P(tp, 246).P(lf, 231).P(o, 0, _, _, "").T(1.091, 1, 0.114, ql).T(1.599, 0, 0.097);
    A1.A(e19).P(tp, 407).P(lf, -97).T(2.806, 406, 0.033, ql).T(2.977, -104, 0.021);
    A1.A(e20).P(tp, 406).P(lf, -104).T(4.532, 345, 0.013, ql).T(4.708, -116, 0.02);
    A1.A(e21).P(tp, 220).P(lf, 222).P(o, 1, _, _, "").T(1, 0, 0.068, ql);
    A1.A(e22).P(tp, 207).P(lf, -207).T(1.685, 306, 0.011, ql).T(1.867, -211, 0.017).P(o, 0, _, _, "").T(1.696, 1, 0.106);
    A1.A(e23).P(tp, 227).P(lf, 162).T(2.179, -453, 0.027, ql).P(o, 0, _, _, "").T(2, 1, 0.13);
    A1.A(e24).P(tp, 205).P(lf, -411).T(2.806, 184, 0.033, ql).T(3, -420, 0.027);
    A1.A(e25).P(tp, 407).P(lf, -85).T(2.483, 292, 0.017, ql).T(2.645, -86, 0.013);
    A1.A(e26).P(tp, 407).P(lf, -80).T(3.459, 292, 0.021, ql).T(3.634, -88, 0.023);
    A1.A(e27).P(tp, 220).P(lf, -302).T(2.23, 237, 0.02, ql).T(2.396, -304, 0.029).P(o, 1, _, _, "").T(2.425, 1);
    A1.A(e28).P(tp, 215).P(lf, -430).T(3.203, 185, 0.022, ql).T(3.362, -417, 0.02);
    A1.A(e29).P(tp, 37).P(lf, -614).T(4.237, 77, 0.013, ql).T(4.41, -641, 0.014);
    A1.A(e30).P(tp, 406).P(lf, -86).T(4.237, 345, 0.013, ql).T(4.41, -96, 0.014);
    A1.A(e31).P(tp, 407).P(lf, -92).T(2.484, 406, 0.016, ql).T(2.645, -264, 0.018);
    A1.A(e32).P(tp, 407).P(lf, -105).T(1.985, 406, 0.015, ql).T(2.155, -98, 0.024);
    A1.A(e33).P(tp, 37).P(lf, -659).T(3.985, 71, 0.015, ql).T(4.153, -634, 0.025);
    A1.A(e34).P(tp, 407).P(lf, -77).T(3.208, 292, 0.017, ql).T(3.362, -96, 0.02);
    A1.A(e35).P(tp, 407).P(lf, -78).T(2.23, 291, 0.02, ql).T(2.396, -90, 0.029);
    A1.A(e36).P(tp, 406).P(lf, -85).T(3.735, 345, 0.016, ql).T(3.906, -152, 0.02);
    A1.A(e37).P(tp, 407).P(lf, -114).T(1.965, 292, 0.02, ql).T(2.155, -91, 0.024);
    A1.A(e38).P(tp, 37).P(lf, -664).T(4.532, 70, 0.013, ql).T(4.708, -632, 0.02);
    A1.A(e39).P(tp, 255).P(lf, 191).T(1.897, -427, 0.013, ql).T(1.91, 191, 0.034).T(2.179, -438, 0.027).T(2.206, 191, 0.238).T(2.444, -418, 0.018).P(o, 0, _, _, "").T(1.696, 1, 0.106).T(1.867, 0, _, _, 0);
    A1.A(e40).P(tp, 37).P(lf, -628).T(3.735, 68, 0.016, ql).T(3.906, -633, 0.02);
    A1.A(e41).P(tp, 407).P(lf, -101).T(0.979, 292, 0.021, ql).T(1.406, -4, _, _, 783).T(1.407, -70, 0.093).T(2.155, 783, _, _, 783).P(o, 0, _, _, "").T(1, 1, 0.068);
    A1.A(e42).P(tp, 407).P(lf, -92).T(3.203, 406, 0.022, ql).T(3.362, -92, 0.022);
    A1.A(e43).P(tp, 125).P(lf, 111).T(1.867, -176, 0.017, ql).P(o, 0, _, _, "").T(1.696, 1, 0.106);
    A1.A(e44).P(tp, 37).P(lf, -636).T(5.173, 68, 0.02, ql).T(5.365, -628, 0.024);
    A1.A(e45).P(tp, 407).P(lf, -77).T(2.23, 406, 0.02, ql).T(2.396, -161, 0.029);
    A1.A(e46).P(tp, 407).P(lf, -96).T(0.937, 405, 0.042, ql).T(1.36, -125, 0.016).P(o, 0, _, _, "").T(1, 1, 0.068);
    A1.A(e47).P(tp, 136).P(lf, 292).P(o, 1, _, _, "").T(1, 0, 0.068, ql);
    A1.A(e48).P(tp, 406).P(lf, -82).T(3.985, 345, 0.015, ql).T(4.153, -117, 0.025);
    A1.A(e49).P(tp, 407).P(lf, -97).T(2.806, 292, 0.033, ql).T(2.977, -87, 0.023);
    A1.A(e50).P(tp, 231).P(lf, -413).T(3.459, 185, 0.021, ql).T(3.634, 801, 0.023);
    A1.A(e51).P(tp, 40).P(lf, -627).T(4.85, 70, 0.023, ql).T(5.035, -621, 0.016);
    var S2 = symbols[x58];
    var tl1 = S2.tl[dt].tt,
        st2 = S2.s[a] = {},
        A2 = A(_, tl1, st2);
    A2.A(e59).P(tp, 0).P(lf, 0).P("cursor", x6);
    A2.A(e60).P(h, 38).P(w, 88);
    var S3 = symbols[x66];
    var tl2 = S3.tl[dt].tt,
        st3 = S3.s[a] = {},
        A3 = A(_, tl2, st3);
    A3.A(e60).P(h, 36).P(w, 70);
    A3.A(e41).P(tp, 0).P("cursor", x6).P(lf, 0).T(0.964, 413, 0.127, ql).T(1.384, 413).T(1.413, 413).T(2.206, 12, 0.025).P(o, 0, _, _, "").T(1.091, 1, 0.114).T(1.599, 0, 0.097);
    Edge.registerCompositionDefn(compId, symbols, fonts, resources);
    $(window).ready(function() {
        Edge.launchComposition(compId);
    });
})(jQuery, AdobeEdge, "EDGE-101289793");