function discard() {
    if (source.prevSecretData) {
        originalData = source.prevSecretData
        runFilter(originalData, filterArray);
    }
}

function filter(tickerFilter) {
    if (!tickerFilter) {
        return;
    }
    if (source.prevSecretData === undefined) {
        source.prevSecretData = originalData
    }
    originalData = source.prevSecretData.filter(e => tickerFilter.includes(e.ticker))
    runFilter(originalData, filterArray);
}

function spb() {
    if (source.prevSecretData === undefined) {
        source.prevSecretData = originalData
    }
    const spbTickers = ["MGM","BX","PLTR","ABNB","AAN","CNXC","AIV","OZON","VTRS","PRG","VNT","AOUT","GROWS","FIPO","HEN3@DE","VOW3@DE","BMW3@DE","B4B3@DE","1COV@DE","ADS@DE","AFX@DE","ALV@DE","B4B@DE","BAS@DE","BAYN@DE","BEI@DE","BOSS@DE","BVB@DE","CON@DE","DAI@DE","DB1@DE","DBK@DE","DHER@DE","DPW@DE","DTE@DE","DWNI@DE","EOAN@DE","EVK@DE","EVT@DE","FIE@DE","FME@DE","FRE@DE","GBF@DE","HEI@DE","HEN@DE","HLAG@DE","HOT@DE","IFX@DE","IVX@DE","KU2@DE","LHA@DE","MOR@DE","MRK@DE","MTX@DE","MUV2@DE","PSM@DE","PUM@DE","RHM@DE","RWE@DE","SHL@DE","SIE@DE","SZU@DE","TKA@DE","TLX@DE","UN01@DE","UTDI@DE","VAR1@DE","VIB3@DE","VNA@DE","VOW@DE","WW","ABM","SSTI","FSS","BANF","OGE","CLDR","BBIO","BGS","SBAC","COLD","ABCB","OXM","LMNX","APPS","EGBN","SFBS","KAMN","BCC","CBT","DKNG","APRE","STAG","CYRX","LMAT","CUE","CAC","UFCS","SAH","NPO","SPXC","HSII","CNA","ELS","CBZ","HY","EAT","ACA","INVH","CONE","TBK","PING","COR","RMAX","MDC","ALLY","SATS","TTEC","DISH","AZZ","CCS","AVTR","CNX","IBTX","ASTE","AGX","JBL","WSFS","SLP","UEIC","HTA","ZI","SCVL","AIMC","KFRC","BLMN","STOK","QTRX","HE","OHI","DRNA","GNTX","SWM","VSAT","CYTK","ASMB","TCDA","NGM","AKRO","ALEC","FIX","POWL","SCI","PRO","STC","ABTX","DRE","AXNX","NARI","CMC","TRMK","FNF","UGI","REYN","CNNE","NKLA","AVT","FHI","ATI","MATW","AEO","RCII","CWEN","BOX","UVV","HCAT","EIDX","VIR","TWST","WORK","MDLA","TRNO","SANM","MODN","SITM","HLIO","ADPT","HMST","WAFD","KLIC","HMN","EFSC","ENR","SWTX","SLGN","SILK","PAHC","APLS","LKFN","CC","ATSG","AXTA","NAT","FTCH","AFYA","XP","INMD","CGEN","SPOT","CLB","CCC","JHG","AMCR","B","WTRG","BRKS","TCBK","BOOM","CHWY","UBSI","GOLF","OTTR","SJI","CSTL","STBA","GTY","HAYN","IBOC","SPCE","SHOO","SMP","PEBO","CPSI","MRTN","FRME","RUSHA","PAR","PHAT","TTGT","RMR","NBTB","SASR","IIPR","EGP","SRCE","FBNC","COFS","AVA","COLB","SBSI","BANR","WBS","BJ","IAA","ARQT","LTC","EBIX","CRY","CTS","CMD","BKU","ACIW","ANF","CVI","FLO","GLPI","FFIN","PNM","NSSC","MDU","PAG","TRS","MLI","FOLD","PETS","HTLF","WMS","LSCC","GO","FBC","RCUS","QTS","IBKR","ACLS","SNDR","CORE","HASI","MGPI","HI","KBH","CATY","TPB","IRDM","INT","PLOW","APAM","LZB","LPX","FBK","IIIV","VIACA","LORL","SCHL","ARCC","KKR","SNEX","VIRT","CIT","NFG","BRX","YMAB","RLMD","ITCI","TEVA","DOYU","EQNR","NICE","MT","AMX","FCNCA","COKE","MLAB","STMP","MOH","NWLI","KWR","KNSL","JJSF","CVNA","SCL","ALG","ICPT","IDA","LNN","VRTS","TXG","LCII","KAI","NPK","BILL","KRTX","ESE","OGS","CRWD","CCOI","VAC","SWX","IOSP","SR","USPH","CNMD","JBT","DNKN","HLNE","EXPO","GLIBA","INDB","MSEX","CNS","HLI","GSHD","ENPH","KRYS","TW","SDGR","IGMS","AMSF","CHCO","ICFI","CDLX","GATX","CCXI","EVRG","ACMR","NWE","SJW","WABC","ARVN","KOD","ATNI","TPTX","ALE","PSMT","TNC","DCPH","PIPR","AIT","ATEX","AIN","CNST","VIE","NCBS","MGRC","EVER","CWST","APLT","VEC","AAON","PJT","PTCT","ATRC","FELE","UTL","BTAI","CEVA","DT","NET","PGNY","ARCT","PTON","NP","NTRA","CRTX","KIDS","FWRD","CSGS","CWT","WIRE","MTX","BDTX","POR","DELL","FTDR","NXPI","CHKP","WSC","IAC","MTCH","RGA","TECH","HRC","IEX","CABO","WTFC","AFG","CBSH","EV","CCMP","HEI","LFUS","WST","EVR","NATI","SAIC","BRO","CW","MNRO","LANC","HUBB","SON","TTC","PNFP","EME","GGG","ITT","CFR","THG","BWXT","ENS","MED","TTEK","KMPR","DCI","ATR","FCFS","CHH","PB","TRHC","WDFC","GBCI","NVRO","CBU","MC","BRC","BOKF","MORN","TDOC","PSN","RRBI","MSA","CMP","BOH","SIGI","RBC","VMI","CSX","SF","UMBF","PRI","WRB","NYT","JACK","LSTR","MPWR","RGLD","EWBC","MKSI","LDOS","LPLA","ENTG","CDK","YUMC","ABC","AWK","CDW","LW","DPZ","TMUS","MSGE","HHR","OTIS","CARR","AON","ARNC","CHNG","GAZP0326","CHMF0924","SIB0924","IR","OVV","RZD0527","GNL","SBRA","CLDT","CORR","KRG","APLE","SRC","DDOG","NTCO","OI","TUN0726","TRY0228","TRY1028","TRY0336","BEL0223","TUN1023","TTEL0225","OMA0148","TRY0141","TRY0130","EGPT0329","OMA0128","ISBNK0424","VAKI0324","TRY0225","TRY0234","EGPT0431","BEL0627","KMRC","SPB@US","ACM","ADUS","AERI","AGIO","ANGI","ANIP","ARNA","ATRA","BLDR","BOOT","CARA","CFX","CORT","CSII","CSOD","CTLT","DAR","ECHO","ECPG","EGHT","EGRX","EHTH","ESPR","FLWS","FOE","FORM","GTN","HALO","HHC","HIBB","HRTX","HSC","IPHI","LPSN","LRN","MRC","MTG","MTOR","MXL","NCR","NTCT","NVEE","OII","OIS","OSUR","PCRX","PPC","PRAA","PRFT","REGI","RXN","SBH","SRI","STAA","SUPN","SYNA","TCX","THS","TTMI","UCTT","UNVR","VCRA","VG","VNDA","VRNS","WRLD","XLRN","ZGNX","ZUMZ","VCEL","SHEN","DLTH","MHO","BMCH","TRUP","LASR","MMI","GTHX","SBCF","MBUU","SMPL","PGTI","CHEF","FOCS","LNTH","SWBI","PLUS","NTLA","NMIH","ALTR","ZYNE","HSKA","FSLY","PINS","RVLV","BYND","ZYXI","POST","RDFN","ITGR","BCPC","QNST","MGY","SONO","FNKO","DNLI","TWNK","XNCR","WAL","EVBG","RGNX","RPD","MDGL","AJRD","YETI","NEO","CDNA","MUSA","BL","PUMP","EDIT","RETA","QTWO","MRNA","GKOS","TCMD","IOVA","USNA","APPN","YEXT","WK","VCYT","INSP","AX","ALLO","UPWK","FATE","AXGN","APPF","FRPT","DIRP03","ALFA0430","TFM01","FRHC","PNTG","PAGS","DIRP02","XRX","MANU","SKX","CROX","CACC","CVLT","EVH","HDS","GSKY","SWI","SMAR","PTC","HUBS","BPMC","SRPT","TCRR","SAGE","ALNY","BLUE","JELD","MDRX","CARS","QRTEA","PS","WTTR","DNOW","TPH","SWCH","EXAS","VRNT","QUOT","PSTG","ATUS","MSGS","AXSM","MDB","BRK.A","ARWR","SFM","GH","MRTX","GOSS","NBIX","LGND","ACAD","TNDM","DXCM","HEAR","IRTC","FGEN","NVTA","NKTR","OKTA","DOCU","DBX","PD","PLAN","NEWR","FICO","ZM","NTNX","ZUO","BMRN","FIVN","SWAV","CHGG","SNAP","ZG","Z","AVLR","PFPT","CSGP","BEAT","TMHC","CREE","LEGH","TENB","EXEL","RNG","OLLI","ATKR","MSGN","RARE","USFD","GBT","GMS","PODD","LYV","SGEN","MKL","CIEN","HAIN","EEFT","DIRP01","UBER","CTVA","DD","CBOM0224EU","CCK","RAMP","EPC","ARW","MTH","CLGX","ATGE","AVNS","PEN","BLD","GCO","ENV","NGVT","FLOW","BFAM","CPS","VRTU","VRTV","HGV","CRMT","APEI","CNXN","VPG","MYRG","SAIL","Y","SFIX","FORR","MCRI","ROKU","LITE","ZS","SNBR","COUP","BECN","CARG","IONS","MEDP","GCP","AAXN","UFPI","SIVB","EYE","AZPN","SYNH","TCBI","PINC","COHR","ALRM","MASI","LGIH","PBH","TREE","OMCL","ICUI","ANAB","FIZZ","FOXF","LHCG","VICR","QDEL","SYKE","SAIA","PLXS","CENTA","VREX","ALLK","NEOG","SPSC","ITRI","WGO","CENT","ROCK","BAND","ONTO","DORM","PETQ","CSWI","OFIX","HCCI","HURN","ROLL","MSTR","CRVL","CVCO","SRDX","SP","FRPH","LEVI","LYFT","TWLO","ASIX","TPIC","RYTM","TTD","DISCB","KTB","MFGP","PDD","TAL","ATHM","BILI","BZUN","LX","QD","TSM","SNY","NTES","DOW","W","DK","BURL","GRUB","MEI","TDS","CHE","WOR","IBP","CTB","DRQ","WHD","AYX","BKI","TMX","SSTK","KFY","VMW","PBF","ARMK","SCCO","KNX","KMT","WCC","CNK","PFGC","DLB","YELP","ZEN","WWE","GDDY","VNE","RYN","HAE","IQV","ELAN","PLNT","CLH","WEX","SITE","BH","AMN","CRL","FND","AVNT","GRA","DKS","RH","MATX","TOL","TPX","TKR","WWW","MD","VC","MLHR","IIVI","TER","EPAY","ANDE","SBGI","TWOU","ABMD","ATRO","PATK","STLD","CMCO","SCSC","SEDG","HA","IRBT","ANIK","PRGS","BRKR","STRA","NUVA","RAVN","TRMB","WDAY","NTUS","NTGR","MYGN","DIOD","ON","FIVE","CHDN","PZZA","TTWO","WERN","ALGT","RRGB","CRUS","WING","FOX","FOXA","DIS","BEB","KCEL","KZTK","LTHM","TNET","KALU","HUBG","CVGW","GTLS","ENSG","ENTA","ERIE","EXLS","FARO","CGNX","CPRT","CALM","BBSI","BJRI","ATRI","AMWD","AEIS","SMTC","LOPE","ACIA","QADA","THRM","WWD","TREX","UFS","UNF","USM","WTS","SSD","SXI","SXT","TDY","TRU","SMG","ABG","AIR","ALV","ASGN","BCO","BDC","BERY","AWI","AWR","BMI","CE","DLX","EBS","FCN","FUL","GBX","GDOT","GEF","GHC","GMED","GNRC","GPI","CR","CRS","GVA","HXL","KEX","LAD","MOV","MSM","MTRN","NEU","NJR","NOW","NSP","NUS","MMS","PRLB","RGR","ROG","ROL","SAM","SAVE","REX","RGEN","SINA","PRSC","MMSI","NXST","OSIS","PCTY","PEGA","POWI","NSIT","MTSC","MANH","MANT","MGLN","IDCC","IPAR","JBSS","JOUT","WAB","CVET","MESS01","AGCO","ALSN","ANET","AOS","ASH","BAH","BC","BIG","BIO","BR","CRI","CSL","DDS","DECK","DY","EPAM","CLR","EXP","GWRE","H","HFC","HII","INGR","JLL","KEYS","LEA","FDS","FLT","LII","LVS","MAN","MSCI","MTN","OSK","PAYC","PII","PKG","NVR","OC","RPM","RS","RMD","SHAK","SNX","SPR","TYL","VEEV","WLK","WSM","WSO","XPO","TFX","THO","TXRH","ZBRA","UI","UTHR","SSNC","SLAB","RP","SAFM","SEIC","ODFL","OLED","PLAY","PLCE","POOL","PRAH","QLYS","MXIM","NDSN","MELI","MIDD","MKTX","LULU","FTNT","LECO","IPGP","JCOM","JKHY","HQY","IART","INGN","HCSG","FANG","COLM","ETSY","CASY","CBRL","CDNS","BLKB","AVAV","AMCX","AMED","TAK","CI","D","TDEU03","XS0885736925","TDEU02","ETRN","WRK","LIN","REZI","ET","XS0893212398","XS0191754729","XS0848530977","XS0935311240","XS0559915961","XS0304274599","XS1693971043","XS1319813769","XS1752568144","XS1603335610","XS1577953174","RU000A0ZYFE2","RU000A0ZZ4B9","GLPR0923","DME0223","CHMF1022","GAZP0322","VOD","RDS.A","PBR","BP","SAP","NVS","KMLC02","VALE","TDEU01","SOHU","ALFAperp0222","PRSP","WH","CHX","SPLK","ALFA0421","GMKN1022","ROSN0322","AVGO","ALFAperp","GAZP1124","RUS0628","BUD","TOT","PRIK01","HWM","SQ","PANW","GAZP0837","VTBperp","RSHB1023","SGENperp","LEN.B","ETM","BMW@DE","BTI","CBPO","GPN","FTI","MAA","GL","SNPS","JCI","RJF","DLR","BHF","ARE","HBAN","LKQ","ALGN","ALK","SPGI","MTD","AYI","COO","INCY","UA","GS","AMD","INFO","WLTW","IT","AEE","REG","RE","FL","AJG","TDG","ALB","HOLX","UNM","FTV","ANSS","ULTA","IDXX","FBHS","DXC","HLT","CHTR","VNO","COTY","LNT","CNC","ED","BKR","LUK0423","RZD0422","PLZL0223","PLZL0322","LUK1126","EVRZ0323","SCFL0623","GAZP0327","STLC0821","DME1121","RZD0324","SBER0222","VIMP0223","GTLK0721","VIP0221","STLF0623","VEON","MBT","NVTK0221","AA","URBN","HBI","AZO","UAA","RF","ENDP","M","MPC","NTRS","XRAY","SIG","KMX","NWL","APTV","STZ","USB","BKNG","EQIX","LEG","GPC","EXPE","KIM","TROW","GPS","CRM","NLOK","VRTX","BWA","RL","ESS","DTE","BBY","DVA","PEG","CMCSA","NEE","SYF","AMAT","CAH","WU","KDP","MUR","KHC","FFIV","QRVO","MNST","IFF","HIG","SLG","BDX","SEE","AKAM","VRSN","IPG","SHW","K","GRMN","FISV","ECL","MOS","ETR","ISRG","CHD","KR","NWS","APD","COST","SO","TDC","CFG","RCL","CTSH","NWSA","ZION","BXP","DISCA","NOV","HP","ANTM","HSIC","VFC","XLNX","XEC","ALXN","CB","CMG","WDC","SWKS","AMG","VTR","PRU","MCO","OKE","IRM","EA","PNC","TXN","DISCK","WY","DFS","CL","STX","KEY","ROST","MSI","PSA","PHM","DHI","HRB","ADBE","SWN","CINF","SJM","BAX","CTXS","EW","TGNA","FMC","SYK","ADSK","ILMN","HCA","HRL","PVH","PGR","LB","WAT","TRIP","REGN","AVY","FIS","PLD","ADI","GLW","ES","RRC","HPE","AAP","WELL","ORLY","APH","LOW","JNPR","BK","LUMN","WEC","BEN","MCHP","IP","AES","WHR","AMT","ICE","TJX","MAR","MKC","CF","L","CERN","HOG","COF","HUM","PBCT","MMC","BF.B","FLIR","JWN","HST","PBI","TT","ADS","CMS","STT","DRI","BLL","AN","TSN","VMC","TPR","EXR","TMO","MAC","OMC","NUE","PPL","INTU","SRE","PFG","UHS","AMP","CVS","KMB","ATVI","CLX","ALLE","ADM","EL","GIS","CMA","SYY","O","CPRI","RIG","GT","TRV","ABT","AAL","CAG","VAR","CBRE","CCI","BBBY","AFL","PKI","CPB","TEL","NTAP","UDR","LLY","WYND","TFC","CCL","ZTS","EQT","PEAK","WYNN","IVZ","FE","YUM","NDAQ","A","TSCO","JEF","BRK.B","MHK","HAS","PCG","ZBH","DGX","LYB","LHX","AIZ","HPQ","FITB","WBA","TAP","MAT","MTB","MCK","AVB","PPG","LRCX","XEL","EIX","LEN","COG","EMN","NAVI","LH","KLAC","ADP","MLM","PDCO","SPG","CNP","ALL","NOK","FCX","MRO","CXO","RSG","JBHT","WMB","JPM","CTAS","COP","SRCL","AIG","EMR","R","MAS","MDLZ","SCHW","WFC","ACN","PSX","FLS","SWK","UPS","SNA","URI","EXPD","AXP","DOV","BIIB","ROK","J","KSU","PWR","EFX","VRSK","UNP","LMT","NKE","C","HES","FDX","HD","NLSN","DLTR","OXY","TXT","GWW","PXD","UAL","HAL","MA","NOC","APA","HSY","ORCL","MRK","BSX","GD","GM","XYL","EOG","BMY","PEP","BLK","FLR","DG","SLB","ITW","MMM","WM","DVN","LUV","CHRW","AMGN","KMI","RTX","RHI","MO","HON","NSC","MDT","DE","PH","PCAR","DHR","CMI","ROP","NVDA","TGT","AME","FAST","ETN","UNH","DCOM","LPL","CHL","KEP","YY","MLCO","LFC","HTHT","IBN","CEA","ZNH","JD","GSH","SKM","JOBS","CHA","MOMO","HNP","ACH","RDY","SHI","WB","PTR","VIPS","BAST","AKZM","CLF","TCS","RACE","GOOG","GOOGL","PYPL","TTM","BIDU","TIF","IRAO","SPB","BABA","PFE","EXC","IBM","WMT","MCD","VLO","DAL","MSFT","CSCO","GILD","VIAC","SBUX","EBAY","NEM","FB","TSLA","CAT","INTC","VZ","XOM","AMZN","AAPL","NFLX","V","TWTR","T","BAC","MS","PM","BA","QCOM","FSLR","JNJ","CME","MU","MET","CVX","F","NRG","ABBV","KO","PG","GE","URKA","RSTI","SBERP","TRNFP","LKOH","MTSS","SBER","MAGN","SNGS","VTBR","RTKM","SNGSP","HYDR","FEES","GMKN","NVTK","MGNT","NLMK","GAZP"]
    originalData = source.prevSecretData.filter(e => spbTickers.includes(e.ticker))
    runFilter(originalData, filterArray);
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    switch (request.type) {
        case 'discard':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + discard + ')();'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        case 'spb':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + spb + ')();'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        case 'custom':
            var script = document.createElement('script');
            script.appendChild(document.createTextNode('(' + filter + ')(' + request.filter + ');'));
            (document.body || document.head || document.documentElement).appendChild(script);
            sendResponse({})
            break;
        default:
            break;
    }
    sendResponse({})
});

function main(fFilter, fDiscard, fSpb) {
    var quickFilter = new Set()
    var quickFilterDiv = document.createElement("div");
    var quickFilterBtnsDiv = document.createElement("div");
    quickFilterBtnsDiv.style.display = "none"
    var buttonApply = document.createElement("BUTTON");
    buttonApply.innerHTML = "Apply";
    buttonApply.addEventListener("click", function() {
        fFilter(Array.from(quickFilter))
    });
    quickFilterBtnsDiv.appendChild(buttonApply)
    var buttonDiscard = document.createElement("BUTTON");
    buttonDiscard.innerHTML = "Discard";
    buttonDiscard.addEventListener("click", function() {
        fDiscard()
        $('#jqxGrid').jqxGrid('clearselection');
        quickFilter = new Set()
        updateFilter()
    });
    quickFilterBtnsDiv.appendChild(buttonDiscard)
    var buttonSpb = document.createElement("BUTTON");
    buttonSpb.innerHTML = "Discard to SPB";
    buttonSpb.style.whiteSpace = "nowrap";
    buttonSpb.addEventListener("click", function() {
        fSpb()
        $('#jqxGrid').jqxGrid('clearselection');
        quickFilter = new Set()
        updateFilter()
    });
    quickFilterBtnsDiv.appendChild(buttonSpb)
    var updateFilter = function() {
        if (quickFilter.size) {
            quickFilterDiv.innerHTML = Array.from(quickFilter)
            quickFilterBtnsDiv.style.display = "inline"
        } else {
            quickFilterDiv.innerHTML = Array.from(quickFilter)
            quickFilterBtnsDiv.style.display = "none"
        }
    }
    $("#jqxGrid").jqxGrid({ selectionmode: 'multiplerows' })
    $('#jqxGrid').on('rowselect', function(event) {
        quickFilter.add(event.args.row.ticker)
        updateFilter()
    });
    $('#jqxGrid').on('rowunselect', function(event) {
        quickFilter.delete(event.args.row.ticker)
        updateFilter()
    });
    $("#jqxGrid").on("bindingcomplete", function(event) {
    	if (quickFilter.size){
            $('#jqxGrid').jqxGrid('clearselection');
            $('#jqxGrid').jqxGrid('getrows').forEach((value, index, array)=>{
            	if(quickFilter.has(value.ticker)){
            		$('#jqxGrid').jqxGrid('selectrow', value.boundindex)
            	}
            })
    	}
    });
    document.getElementsByClassName("left_sidebar")[0].appendChild(quickFilterDiv);
    document.getElementsByClassName("left_sidebar")[0].appendChild(quickFilterBtnsDiv);
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            $('#jqxGrid').jqxGrid('clearselection');
            quickFilter = new Set()
            updateFilter()
        }
    };
}

var scriptMain = document.createElement('script');
scriptMain.appendChild(document.createTextNode('(' + main + ')(' + filter + ',' + discard + ',' + spb + ');'));
(document.body || document.head || document.documentElement).appendChild(scriptMain);