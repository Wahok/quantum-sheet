var Module=typeof globalThis.__pyodide_module!=="undefined"?globalThis.__pyodide_module:{};if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH="";if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof process==="undefined"&&typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}var PACKAGE_NAME="build/distutils.data";var REMOTE_PACKAGE_BASE="distutils.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata["remote_package_size"];var PACKAGE_UUID=metadata["package_uuid"];function fetchRemotePackage(packageName,packageSize,callback,errback){if(typeof process==="object"){require("fs").readFile(packageName,(function(err,contents){if(err){errback(err)}else{callback(contents.buffer)}}));return}var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,(function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}}),handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.9",true,true);Module["FS_createPath"]("/lib/python3.9","distutils",true,true);Module["FS_createPath"]("/lib/python3.9/distutils","command",true,true);Module["FS_createPath"]("/lib/python3.9/distutils","tests",true,true);function processPackageData(arrayBuffer){assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:511906,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,1431,2734,4250,5542,6414,7564,8576,9576,10641,11802,13008,14317,15328,16601,18056,19142,20220,21220,22456,23639,24712,25994,27458,28598,29994,31213,32429,33346,34555,35651,36646,37764,39082,40370,41623,42925,43507,44672,45962,46937,48215,49432,50810,52253,53658,55082,56387,57578,58971,59978,61138,62337,63450,64871,65933,66993,68336,69669,70818,72098,73504,74718,75866,77174,78405,79621,80936,82328,83689,85055,86536,87892,89111,90498,92039,93033,94370,95704,96996,98113,99273,100316,101565,102873,104136,105141,106394,107435,108545,109414,110537,111686,112843,113969,114990,115860,116835,117565,118865,120050,121555,122777,123711,124980,125839,127284,128541,129655,130740,131945,133140,134342,135585,137041,138156,139669,141008,142168,143484,144503,145041,146404,147575,148912,150058,151404,152459,153768,155059,156385,157744,158835,159862,160761,161737,162620,163721,165051,166111,167386,168510,169714,171083,172290,173183,174178,175172,176122,177105,178300,179550,180947,182156,183563,184963,186213,187475,188444,189696,191055,192113,193569,194905,196308,197621,198848,200076,201402,202470,203692,205139,206382,207506,208565,209908,211156,212290,213653,214996,216307,217742,219069,220531,221915,223245,224534,225849,227244,228379,229490,230767,232373,233837,235148,236202,237432,238577,239666,240886,241891,242890,244238,245004,246028,246947,248137,249329,250383,251270,252361,253518,254302,255411,256303,257395,258464,259673,260736,261878,263020,263892,264842,265921,267086,268272,269342,270595,271674,272773,273840,274955,276028,277281,278479,279598,280805,281964,283073,284238,285325,286634,287640,288611,289718,291152,292165,293176,294226,295276,296495,297657,298687,299790,300981,302179,303372,304677,305920,307201,308354,309687,310892,312058,313264,314464,315517,316705,317938,319115,320028,321108,322307,323412,324519,325632,326949,328041,329130,330376,331111,332372,333568,334610,335749,336959,338332,339498,340475,341736,342646,343691,344726,345949,346976,348040,349119,350405,351597,352773,353793,355006,356038,357241,358367,359538,360732,361669,362767,363988,365202,366349,367585,368734,369747,370884,372141,373470,374734,375902,377054,378267,379564,380773,382094,383424,384784,386079,386987,388114,388981,389977,390932,391688,392902,394123,395440,396651,397777,398962,400263,401291,402103,403438,404587,405711,406689,407454,408445,409519,410474,411332,412555,413726,414843,415796,416984,417907,419155,420190,421212,422408,423398,424346,425521,426613,427778,428896,429984,431127,432286,433078,434026,435111,436006,437201,438232,439029,440005,441094,441774,442463,443105,444174,445338,446551,447724,448632,449893,450797,451706,452474,452966,453846,455036,456033,456864,457849,459015,460008,461103,461938,462942,464119,465377,466259,467328,468498,469585,470755,471906,472870,473826,475080,476172,477237,478273,479416,480629,481639,482653,483713,484717,485348,486501,487603,488447,489164,490204,491503,492324,493372,493849,494897,496032,497320,498505,499622,500699,501119,502168,503108,504294,505041,506143,507359,508046,509127,509880,510603],sizes:[1431,1303,1516,1292,872,1150,1012,1e3,1065,1161,1206,1309,1011,1273,1455,1086,1078,1e3,1236,1183,1073,1282,1464,1140,1396,1219,1216,917,1209,1096,995,1118,1318,1288,1253,1302,582,1165,1290,975,1278,1217,1378,1443,1405,1424,1305,1191,1393,1007,1160,1199,1113,1421,1062,1060,1343,1333,1149,1280,1406,1214,1148,1308,1231,1216,1315,1392,1361,1366,1481,1356,1219,1387,1541,994,1337,1334,1292,1117,1160,1043,1249,1308,1263,1005,1253,1041,1110,869,1123,1149,1157,1126,1021,870,975,730,1300,1185,1505,1222,934,1269,859,1445,1257,1114,1085,1205,1195,1202,1243,1456,1115,1513,1339,1160,1316,1019,538,1363,1171,1337,1146,1346,1055,1309,1291,1326,1359,1091,1027,899,976,883,1101,1330,1060,1275,1124,1204,1369,1207,893,995,994,950,983,1195,1250,1397,1209,1407,1400,1250,1262,969,1252,1359,1058,1456,1336,1403,1313,1227,1228,1326,1068,1222,1447,1243,1124,1059,1343,1248,1134,1363,1343,1311,1435,1327,1462,1384,1330,1289,1315,1395,1135,1111,1277,1606,1464,1311,1054,1230,1145,1089,1220,1005,999,1348,766,1024,919,1190,1192,1054,887,1091,1157,784,1109,892,1092,1069,1209,1063,1142,1142,872,950,1079,1165,1186,1070,1253,1079,1099,1067,1115,1073,1253,1198,1119,1207,1159,1109,1165,1087,1309,1006,971,1107,1434,1013,1011,1050,1050,1219,1162,1030,1103,1191,1198,1193,1305,1243,1281,1153,1333,1205,1166,1206,1200,1053,1188,1233,1177,913,1080,1199,1105,1107,1113,1317,1092,1089,1246,735,1261,1196,1042,1139,1210,1373,1166,977,1261,910,1045,1035,1223,1027,1064,1079,1286,1192,1176,1020,1213,1032,1203,1126,1171,1194,937,1098,1221,1214,1147,1236,1149,1013,1137,1257,1329,1264,1168,1152,1213,1297,1209,1321,1330,1360,1295,908,1127,867,996,955,756,1214,1221,1317,1211,1126,1185,1301,1028,812,1335,1149,1124,978,765,991,1074,955,858,1223,1171,1117,953,1188,923,1248,1035,1022,1196,990,948,1175,1092,1165,1118,1088,1143,1159,792,948,1085,895,1195,1031,797,976,1089,680,689,642,1069,1164,1213,1173,908,1261,904,909,768,492,880,1190,997,831,985,1166,993,1095,835,1004,1177,1258,882,1069,1170,1087,1170,1151,964,956,1254,1092,1065,1036,1143,1213,1010,1014,1060,1004,631,1153,1102,844,717,1040,1299,821,1048,477,1048,1135,1288,1185,1117,1077,420,1049,940,1186,747,1102,1216,687,1081,753,723,1303],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData["data"]=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData},true);Module["removeRunDependency"]("datafile_build/distutils.data")}Module["addRunDependency"]("datafile_build/distutils.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.9/distutils/README",start:0,end:242,audio:0},{filename:"/lib/python3.9/distutils/__init__.py",start:242,end:478,audio:0},{filename:"/lib/python3.9/distutils/_msvccompiler.py",start:478,end:20485,audio:0},{filename:"/lib/python3.9/distutils/archive_util.py",start:20485,end:29057,audio:0},{filename:"/lib/python3.9/distutils/bcppcompiler.py",start:29057,end:43951,audio:0},{filename:"/lib/python3.9/distutils/ccompiler.py",start:43951,end:91368,audio:0},{filename:"/lib/python3.9/distutils/cmd.py",start:91368,end:109447,audio:0},{filename:"/lib/python3.9/distutils/config.py",start:109447,end:114274,audio:0},{filename:"/lib/python3.9/distutils/core.py",start:114274,end:123150,audio:0},{filename:"/lib/python3.9/distutils/cygwinccompiler.py",start:123150,end:139530,audio:0},{filename:"/lib/python3.9/distutils/debug.py",start:139530,end:139669,audio:0},{filename:"/lib/python3.9/distutils/dep_util.py",start:139669,end:143160,audio:0},{filename:"/lib/python3.9/distutils/dir_util.py",start:143160,end:150938,audio:0},{filename:"/lib/python3.9/distutils/dist.py",start:150938,end:201323,audio:0},{filename:"/lib/python3.9/distutils/errors.py",start:201323,end:204900,audio:0},{filename:"/lib/python3.9/distutils/extension.py",start:204900,end:215415,audio:0},{filename:"/lib/python3.9/distutils/fancy_getopt.py",start:215415,end:233199,audio:0},{filename:"/lib/python3.9/distutils/file_util.py",start:233199,end:241347,audio:0},{filename:"/lib/python3.9/distutils/filelist.py",start:241347,end:254179,audio:0},{filename:"/lib/python3.9/distutils/log.py",start:254179,end:256148,audio:0},{filename:"/lib/python3.9/distutils/msvc9compiler.py",start:256148,end:286601,audio:0},{filename:"/lib/python3.9/distutils/msvccompiler.py",start:286601,end:310141,audio:0},{filename:"/lib/python3.9/distutils/spawn.py",start:310141,end:314533,audio:0},{filename:"/lib/python3.9/distutils/sysconfig.py",start:314533,end:335165,audio:0},{filename:"/lib/python3.9/distutils/text_file.py",start:335165,end:347648,audio:0},{filename:"/lib/python3.9/distutils/unixccompiler.py",start:347648,end:362402,audio:0},{filename:"/lib/python3.9/distutils/util.py",start:362402,end:383315,audio:0},{filename:"/lib/python3.9/distutils/version.py",start:383315,end:395829,audio:0},{filename:"/lib/python3.9/distutils/versionpredicate.py",start:395829,end:400962,audio:0},{filename:"/lib/python3.9/distutils/command/__init__.py",start:400962,end:401761,audio:0},{filename:"/lib/python3.9/distutils/command/bdist.py",start:401761,end:407323,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_dumb.py",start:407323,end:412236,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_msi.py",start:412236,end:447815,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_rpm.py",start:447815,end:469352,audio:0},{filename:"/lib/python3.9/distutils/command/bdist_wininst.py",start:469352,end:485382,audio:0},{filename:"/lib/python3.9/distutils/command/build.py",start:485382,end:491149,audio:0},{filename:"/lib/python3.9/distutils/command/build_clib.py",start:491149,end:499171,audio:0},{filename:"/lib/python3.9/distutils/command/build_ext.py",start:499171,end:530806,audio:0},{filename:"/lib/python3.9/distutils/command/build_py.py",start:530806,end:547996,audio:0},{filename:"/lib/python3.9/distutils/command/build_scripts.py",start:547996,end:554228,audio:0},{filename:"/lib/python3.9/distutils/command/check.py",start:554228,end:559865,audio:0},{filename:"/lib/python3.9/distutils/command/clean.py",start:559865,end:562641,audio:0},{filename:"/lib/python3.9/distutils/command/command_template",start:562641,end:563274,audio:0},{filename:"/lib/python3.9/distutils/command/config.py",start:563274,end:576391,audio:0},{filename:"/lib/python3.9/distutils/command/install.py",start:576391,end:603196,audio:0},{filename:"/lib/python3.9/distutils/command/install_data.py",start:603196,end:606018,audio:0},{filename:"/lib/python3.9/distutils/command/install_egg_info.py",start:606018,end:608621,audio:0},{filename:"/lib/python3.9/distutils/command/install_headers.py",start:608621,end:609919,audio:0},{filename:"/lib/python3.9/distutils/command/install_lib.py",start:609919,end:618316,audio:0},{filename:"/lib/python3.9/distutils/command/install_scripts.py",start:618316,end:620333,audio:0},{filename:"/lib/python3.9/distutils/command/register.py",start:620333,end:632045,audio:0},{filename:"/lib/python3.9/distutils/command/sdist.py",start:632045,end:651050,audio:0},{filename:"/lib/python3.9/distutils/command/upload.py",start:651050,end:658647,audio:0},{filename:"/lib/python3.9/distutils/tests/Setup.sample",start:658647,end:660896,audio:0},{filename:"/lib/python3.9/distutils/tests/__init__.py",start:660896,end:662240,audio:0},{filename:"/lib/python3.9/distutils/tests/includetest.rst",start:662240,end:662265,audio:0},{filename:"/lib/python3.9/distutils/tests/support.py",start:662265,end:668743,audio:0},{filename:"/lib/python3.9/distutils/tests/test_archive_util.py",start:668743,end:683044,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist.py",start:683044,end:684937,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_dumb.py",start:684937,end:687842,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_msi.py",start:687842,end:688645,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_rpm.py",start:688645,end:693653,audio:0},{filename:"/lib/python3.9/distutils/tests/test_bdist_wininst.py",start:693653,end:695043,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build.py",start:695043,end:697008,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_clib.py",start:697008,end:701639,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_ext.py",start:701639,end:722272,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_py.py",start:722272,end:728607,audio:0},{filename:"/lib/python3.9/distutils/tests/test_build_scripts.py",start:728607,end:732200,audio:0},{filename:"/lib/python3.9/distutils/tests/test_check.py",start:732200,end:737911,audio:0},{filename:"/lib/python3.9/distutils/tests/test_clean.py",start:737911,end:739352,audio:0},{filename:"/lib/python3.9/distutils/tests/test_cmd.py",start:739352,end:743187,audio:0},{filename:"/lib/python3.9/distutils/tests/test_config.py",start:743187,end:747079,audio:0},{filename:"/lib/python3.9/distutils/tests/test_config_cmd.py",start:747079,end:750102,audio:0},{filename:"/lib/python3.9/distutils/tests/test_core.py",start:750102,end:754179,audio:0},{filename:"/lib/python3.9/distutils/tests/test_cygwinccompiler.py",start:754179,end:759815,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dep_util.py",start:759815,end:762635,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dir_util.py",start:762635,end:767289,audio:0},{filename:"/lib/python3.9/distutils/tests/test_dist.py",start:767289,end:786369,audio:0},{filename:"/lib/python3.9/distutils/tests/test_extension.py",start:786369,end:789137,audio:0},{filename:"/lib/python3.9/distutils/tests/test_file_util.py",start:789137,end:793550,audio:0},{filename:"/lib/python3.9/distutils/tests/test_filelist.py",start:793550,end:805025,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install.py",start:805025,end:813637,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_data.py",start:813637,end:816214,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_headers.py",start:816214,end:817452,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_lib.py",start:817452,end:821426,audio:0},{filename:"/lib/python3.9/distutils/tests/test_install_scripts.py",start:821426,end:824051,audio:0},{filename:"/lib/python3.9/distutils/tests/test_log.py",start:824051,end:825915,audio:0},{filename:"/lib/python3.9/distutils/tests/test_msvc9compiler.py",start:825915,end:831953,audio:0},{filename:"/lib/python3.9/distutils/tests/test_msvccompiler.py",start:831953,end:834798,audio:0},{filename:"/lib/python3.9/distutils/tests/test_register.py",start:834798,end:844563,audio:0},{filename:"/lib/python3.9/distutils/tests/test_sdist.py",start:844563,end:861610,audio:0},{filename:"/lib/python3.9/distutils/tests/test_spawn.py",start:861610,end:867070,audio:0},{filename:"/lib/python3.9/distutils/tests/test_sysconfig.py",start:867070,end:878115,audio:0},{filename:"/lib/python3.9/distutils/tests/test_text_file.py",start:878115,end:881551,audio:0},{filename:"/lib/python3.9/distutils/tests/test_unixccompiler.py",start:881551,end:886179,audio:0},{filename:"/lib/python3.9/distutils/tests/test_upload.py",start:886179,end:893318,audio:0},{filename:"/lib/python3.9/distutils/tests/test_util.py",start:893318,end:904890,audio:0},{filename:"/lib/python3.9/distutils/tests/test_version.py",start:904890,end:908340,audio:0},{filename:"/lib/python3.9/distutils/tests/test_versionpredicate.py",start:908340,end:908620,audio:0},{filename:"/lib/python3.9/distutils/tests/xxmodule.c",start:908620,end:921535,audio:0}],remote_package_size:516002,package_uuid:"0d4c3fc6-eb51-4e68-aa05-cb5596499aa0"})})();