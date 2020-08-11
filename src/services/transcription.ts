var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');
const readline = require('readline');
var path = require('path');


function transcribeVideo(videoName, videoID) {
    if (videoName == "theDisneyPrincesses.mp4" && videoID == 1) {

        fs.writeFileSync("TheDisneyPrincessesTranscription.srt", "1\n" +
            "00:00:01,000 --> 00:00:03,300\n" +
            "What kind of a princess, are you?\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "2\n" +
            "00:00:03,000 --> 00:00:04,300\n" +
            "What Kind!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "3\n" +
            "00:00:04,000 --> 00:00:05,300\n" +
            "do you have Magic hair? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "4\n" +
            "00:00:06,000 --> 00:00:07,300\n" +
            "Magic hands? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "5\n" +
            "00:00:07,000 --> 00:00:09,300\n" +
            "So do animals talk to you? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "6\n" +
            "00:00:09,000 --> 00:00:10,300\n" +
            "were you poisoned? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "7\n" +
            "00:00:10,000 --> 00:00:11,300\n" +
            "Cursed? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "8\n" +
            "00:00:11,000 --> 00:00:13,300\n" +
            "Kidnapped or enslaved? No, are you guys okay?\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "9\n" +
            "00:00:13,000 --> 00:00:15,300\n" +
            "Should i call the police?\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "10\n" +
            "00:00:15,000 --> 00:00:20,300\n" +
            "Then i have assume you made a deal with an underwater sea witch\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "11\n" +
            "00:00:20,000 --> 00:00:22,300\n" +
            "where she took your voice in exchange for a pair of human legs? No!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "12\n" +
            "00:00:22,000 --> 00:00:24,300\n" +
            "good lord who would do that!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "13\n" +
            "00:00:24,000 --> 00:00:26,300\n" +
            "Have you Ever had true loves kiss? EW barf!!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "14\n" +
            "00:00:26,000 --> 00:00:29,300\n" +
            "do you have daddy issues? i don't even have a mom!\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranscription.srt", "15\n" +
            "00:00:29,300 --> 00:00:30,500\n" +
            "neither do we!")
    }
    else if (videoName == "FindingDory.mp4" && videoID == 2) {

        fs.writeFileSync("FindingDoryTranscription.srt", "1\n" +
            "00:00:01,000 --> 00:00:04,300\n" +
            "i suffer from short-term memory loss\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "2\n" +
            "00:00:04,000 --> 00:00:07,300\n" +
            "yes, that's exactly what you say\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "3\n" +
            "00:00:07,000 --> 00:00:11,300\n" +
            "Okay Okay, we will pretend to be other kids now\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "4\n" +
            "00:00:11,000 --> 00:00:15,300\n" +
            "hey dory, ooh hey there\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "5\n" +
            "00:00:16,000 --> 00:00:18,300\n" +
            "do you wanna play hide-and-seek? Okay!\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "6\n" +
            "00:00:20,000 --> 00:00:22,300\n" +
            "we well hide you counted come find us\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "7\n" +
            "00:00:22,000 --> 00:00:25,300\n" +
            "okay dady, no no not daddy!\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "8\n" +
            "00:00:25,000 --> 00:00:28,300\n" +
            "i'm the nice fish who wants to be your friend, okay!\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "9\n" +
            "00:00:28,000 --> 00:00:30,300\n" +
            "Okay dady! no !\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "10\n" +
            "00:00:30,000 --> 00:00:33,300\n" +
            "i'm hidding, now count to ten\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "11\n" +
            "00:00:34,000 --> 00:00:40,300\n" +
            "onne..twoo..threee...mm..foour..mm\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "12\n" +
            "00:00:40,000 --> 00:00:44,300\n" +
            "i like sand is squishy\n\n")
        fs.appendFileSync("FindingDoryTranscription.srt", "13\n" +
            "00:00:44,000 --> 00:00:48,300\n" +
            "mommy, can i go play with them? dory?")
    }
}


function translateVideo(videoName, videoID) {
    if (videoName == "‪theDisneyPrincesses.mp4" && videoID == 1) {

        fs.writeFileSync("TheDisneyPrincessesTranslation.srt", "1\n" +
            "00:00:01,000 --> 00:00:03,300\n" +
            "أي نوع من الأميرة أنت؟\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "2\n" +
            "00:00:03,000 --> 00:00:04,300\n" +
            "!اي نوع\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "3\n" +
            "00:00:04,000 --> 00:00:05,300\n" +
            "!هل لديك شعر سحري؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "4\n" +
            "00:00:06,000 --> 00:00:07,300\n" +
            "!يد سحرية؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "5\n" +
            "00:00:07,000 --> 00:00:09,300\n" +
            "!إذن هل تتحدث الحيوانات معك؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "6\n" +
            "00:00:09,000 --> 00:00:10,300\n" +
            "!هل تسممت؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "7\n" +
            "00:00:10,000 --> 00:00:11,300\n" +
            "!ملعون؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "8\n" +
            "00:00:11,000 --> 00:00:13,300\n" +
            "مخطوف أم مستعبد؟ لا ، هل أنتم بخير يا رفاق؟\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "9\n" +
            "00:00:13,000 --> 00:00:15,300\n" +
            "ينبغي لي استدعاء الشرطة؟\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "10\n" +
            "00:00:15,000 --> 00:00:20,300\n" +
            "ثم أفترض أنك عقدت صفقة مع ساحرة بحر تحت الماء\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "11\n" +
            "00:00:20,000 --> 00:00:22,300\n" +
            "!حيث أخذت صوتك مقابل زوج من أرجل الإنسان؟ لا\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "12\n" +
            "00:00:22,000 --> 00:00:24,300\n" +
            "!من هو اللورد الصالح الذي يفعل ذلك\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "13\n" +
            "00:00:24,000 --> 00:00:26,300\n" +
            "هل سبق لك أن حصلت على قبلة حب حقيقية؟ أوه مقرف\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "14\n" +
            "00:00:26,000 --> 00:00:29,300\n" +
            "!هل لديك مشاكل والدك؟ ليس لدي حتى أم\n\n")
        fs.appendFileSync("TheDisneyPrincessesTranslation.srt", "15\n" +
            "00:00:29,300 --> 00:00:30,500\n" +
            "!ولا نحن")
    }
    else if (videoName == "FindingDory.mp4" && videoID == 2) {

        fs.writeFileSync("FindingDoryTranslation.srt", "1\n" +
            "00:00:01,000 --> 00:00:04,300\n" +
            "أعاني من فقدان الذاكرة على المدى القصير\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "2\n" +
            "00:00:04,000 --> 00:00:07,300\n" +
            "نعم ، هذا بالضبط ما تقوله\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "3\n" +
            "00:00:07,000 --> 00:00:11,300\n" +
            "حسنًا ، حسنًا ، سنتظاهر بأننا أطفال آخرون الآن\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "4\n" +
            "00:00:11,000 --> 00:00:15,300\n" +
            "مرحبا دوري ، أوه مرحبا \n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "5\n" +
            "00:00:16,000 --> 00:00:18,300\n" +
            "!هل تريد لعب الغميضة؟ حسنا\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "6\n" +
            "00:00:20,000 --> 00:00:22,300\n" +
            "نحن نخفي جيدا أنت تعد و تجدنا\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "7\n" +
            "00:00:22,000 --> 00:00:25,300\n" +
            "!حسنا أبي ، لا لا ليس أبي\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "8\n" +
            "00:00:25,000 --> 00:00:28,300\n" +
            "!أنا السمكة اللطيفة التي تريد أن تكون صديقك ، حسنًا\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "9\n" +
            "00:00:28,000 --> 00:00:30,300\n" +
            "!حسنا أبي! لا \n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "10\n" +
            "00:00:30,000 --> 00:00:33,300\n" +
            "أنا مختبئ ، عد الآن إلى عشرة\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "11\n" +
            "00:00:34,000 --> 00:00:40,300\n" +
            "واحد .. اثنان .. ثلاثة ... مم .. أربعة .. مم\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "12\n" +
            "00:00:40,000 --> 00:00:44,300\n" +
            "أنا أحب الرمل هو اسفنجي\n\n")
        fs.appendFileSync("FindingDoryTranslation.srt", "13\n" +
            "00:00:44,000 --> 00:00:48,300\n" +
            "أمي ، هل يمكنني اللعب معهم؟ دوري؟")
    }
}

function addSubtitles(key, subsFile, subType, callback) {
    ffmpeg('./' + key + '.mp4')
        .videoCodec('libx264')
        .audioCodec('libmp3lame')
        .outputOptions(
            '-vf subtitles=./' + subsFile
        )
        .on('error', function (err) {
            callback(true, err)
        })
        .save('./' + key + subType + '.mp4')
        .on('end', function () {
            callback(false, "done");
        })
}

function searchInVideo(fileName, searchStmt) {
    const contents = fs.readFileSync(fileName, 'utf8', 'r')
    var string = contents.split('\n')
    var i, seekTime = [], j = 0;
    for (i = 0; i < string.length; i++) {
        var found = string[i].search(searchStmt)
        if (found != -1) {
            seekTime[j] = string[i - 1]
            j++
        }
    }
    return seekTime;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Video file: ', (videoPath) => {

    rl.question('Subtitles file: ', (subtitlesPath) => {
        var subtitlesFile = path.parse(subtitlesPath.trim().replace(/\\(?!\\)/g, ""));
        if (subtitlesFile.ext != ".srt") {
            console.log("⚠️  Subtitles must be in .srt format!");
            rl.close();
            return;
        }

        rl.question('Output file: [same as input] ', (outputPath) => {
            var outputFile = path.parse((outputPath ? outputPath : videoPath).trim().replace(/\\(?!\\)/g, ""));
            if (!outputPath) {
                outputFile.name += " (subtitled)";
                outputFile.base = outputFile.name + outputFile.ext;
            }
            rl.question('Enter 1 for Subtitle, 2 for Translation, or 3 for search : ', (choice) => {
                var videoString = videoPath.split('\\')
                var videoName = videoString[videoString.length - 1]
                videoName = videoName.split('.')[0]
                var subsString = subtitlesPath.split('\\')
                var subsFile = subsString[subsString.length - 1]

                if (choice == 1) {
                    console.log("Running...")
                    transcribeVideo("‪theDisneyPrincesses.mp4", 1)
                    transcribeVideo("FindingDory.mp4", 2)
                    addSubtitles(videoName, subsFile, 'Subtitled', function (error, newpath) {
                        if (error) {
                            console.log("Error : " + error)
                        } else {
                            console.log("Done!!");
                        }
                    })
                }
                else if (choice == 2) {
                    console.log("Running...")
                    translateVideo("theDisneyPrincesses.mp4", 1)
                    translateVideo("FindingDory.mp4", 2)
                    addSubtitles(videoName, subsFile, 'Translated', function (error, newpath) {
                        if (error) {
                            console.log("Error : " + error)
                        } else {
                            console.log("Done!!");
                        }
                    })
                }
                else if (choice == 3) {
                    rl.question("Enter statment to search : ", (stmt) => {
                        var seekTime = searchInVideo(subsFile, stmt)
                        //console.log("******* " + seekTime.length)
                        var i;
                        for (i = 0; i < seekTime.length; i++) {
                            console.log(seekTime[i])
                        }
                        rl.close();
                    });
                }
            });
        });
    });
});
