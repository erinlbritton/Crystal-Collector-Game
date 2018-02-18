
// As jQuery documentation states: "A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you. Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
 $(document).ready(function() {
        // Initialize global variables
                var counter = 0;
                var globalWins = 0;
                var globalLosses = 0;
                $("#currentRupees").append(counter);
                $("#globalWins").append("Wins: " + globalWins);
                $("#globalLosses").append("Losses: " + globalLosses);
                var targetScore = 0;
                var setValues = [];
                var neededClicks = [0, 0, 0, 0];
                var trivia = [
                        "The Legend of Zelda is an action-adventure video game developed and published by Nintendo and designed by Shigeru Miyamoto and Takashi Tezuka. Set in the fantasy land of Hyrule, the plot centers on a boy named Link, the playable protagonist, who aims to collect the eight fragments of the Triforce of Wisdom in order to rescue Princess Zelda from the antagonist, Ganon. During the course of the game, the player sees Link from a top-down perspective and must navigate him through the overworld and several dungeons, defeating enemies and finding secrets along the way.",
                        "The first game of The Legend of Zelda series, it was originally released in Japan as a launch title for the Family Computer Disk System peripheral in 1986. More than a year later, North America and Europe received releases on the Nintendo Entertainment System in cartridge format, making the game the first home console title to include an internal battery for saving data. This version was released in Japan in 1994 under the title The Hyrule Fantasy: The Legend of Zelda 1. The game was ported to the GameCube and Game Boy Advance, and is available in emulated form via the Virtual Console on the Wii, Nintendo 3DS and Wii U.",
                        "The Legend of Zelda was a bestseller for Nintendo, selling over 6.5 million copies. It is often featured in lists of games considered the greatest or most influential. A solitary sequel, Zelda II: The Adventure of Link, was first released in Japan less than a year after its predecessor's debut. The game spawned several prequels and a number of spin-offs, establishing a series that has become one of Nintendo's most popular.",
                        "The plot of The Legend of Zelda is described in the instruction booklet and in the short prologue after the title screen. A small kingdom in the land of Hyrule, the setting of the game, is engulfed in chaos after an army led by Ganon, the Prince of Darkness, invaded it and stole the Triforce of Power, a part of a magical artifact bestowing great strength. In an attempt to prevent Ganon from acquiring the Triforce of Wisdom, another of the pieces, Princess Zelda splits it and hides the eight fragments in secret dungeons throughout the land.",
                        "Before the princess is eventually kidnapped by Ganon, she commands her nursemaid Impa to find someone courageous enough to save the kingdom. While wandering the land, the old woman is surrounded by Ganon's henchmen, though a young boy named Link appears and rescues her. After hearing Impa's plea, he resolves to save Zelda and sets out to reassemble the scattered fragments of the Triforce of Wisdom, to become powerful enough to defeat Ganon.",
                        "During the course of the game, Link locates the eight underground labyrinths, defeats several guardian monsters, and retrieves the fragments. With the completed Triforce of Wisdom, Link is able to infiltrate Ganon's hideout, Death Mountain, eventually confronting the pig-like enemy and destroying him with a Silver Arrow. Link picks up the Triforce of Power from Ganon's ashes and returns both pieces of the Triforce to the rescued Princess Zelda, restoring peace to Hyrule.",
                        "Development began in 1984, and the game was originally intended to be a launch title for the Famicom Disk System. The development team worked on The Legend of Zelda and Super Mario Bros. concurrently, and tried to separate their ideas: Super Mario Bros. was to be linear, where the action occurred in a strict sequence, whereas The Legend of Zelda would be the opposite. In Mario, producer Shigeru Miyamoto downplayed the importance of the high score in favor of simply completing the game. This concept was carried over to The Legend of Zelda. Miyamoto was also in charge of deciding which concepts were 'Zelda ideas' or 'Mario ideas.' Contrasting with Mario, Zelda was made non-linear and forced the players to think about what they should do next.",
                        "With The Legend of Zelda, Miyamoto wanted to take the idea of a game 'world' even further, giving players a 'miniature garden that they can put inside their drawer.' He drew his inspiration from his experiences as a boy around Kyoto, where he explored nearby fields, woods, and caves, and through the Zelda titles he always tries to impart to players some of the sense of exploration and limitless wonder he felt. 'When I was a child,' he said, 'I went hiking and found a lake. It was quite a surprise for me to stumble upon it. When I traveled around the country without a map, trying to find my way, stumbling on amazing things as I went, I realized how it felt to go on an adventure like this.' The memory of being lost amid the maze of sliding doors in his family's home in Sonobe was recreated in Zelda's labyrinth dungeons.",
                        "A 'symbol of courage, strength, and wisdom', Link was designed by Miyamoto as a coming of age motif for players to identify with: he begins the game an ordinary boy but strengthens to triumph over the ultimate evil. The name of the princess was inspired by Zelda Fitzgerald: 'Zelda was the name of the wife of the famous novelist F. Scott Fitzgerald. She was a famous and beautiful woman from all accounts, and I liked the sound of her name. So I took the liberty of using her name for the very first Zelda title,'' Miyamoto explained.",
                        "GameSpot featured The Legend of Zelda as one of the 15 most influential games of all time, for being an early example of open world, nonlinear gameplay, and for its introduction of battery backup saving, laying the foundations for later action-adventure games like Metroid and role-playing video games like Final Fantasy, while influencing most modern games in general. In 2009, Game Informer called The Legend of Zelda 'no less than the greatest game of all time' on their list of 'The Top 200 Games of All Time,' saying that it was 'ahead of its time by years if not decades.",
                        "Thank you for playing!"
                ];

        // Resets global vars, removes values from imgs, generates random values/clicks/target, assigns new values to imgs/html
                function reset() {
                        counter = 0;
                        document.querySelector("#currentRupees").innerHTML = counter;
                        document.querySelector("#counterId").innerHTML = '<div id="currentRupees">0</div>';
                        document.querySelector("#rupeeId").innerHTML = '<img class="img-position rupee" id="rupee1" src="assets/images/rupee1.png"><img class="img-position rupee" id="rupee2" src="assets/images/rupee2.png"><img class="img-position rupee" id="rupee3" src="assets/images/rupee3.png"><img class="img-position rupee" id="rupee4" src="assets/images/rupee4.png">'
                        targetScore = 0;
                        setValues.length = 0;
                        neededClicks.length = 0;
                // Choose four distinct random values
                        for (var i = 0; i < 4; i++) {
                                var randomValue = Math.floor((Math.random() * 10) + 1);
                                if (setValues.indexOf(randomValue) === -1) {
                                        setValues.push(randomValue);
                                } else i--;
                        }; 
                // Assign the above random values to the four rupee images
                        $.each(setValues, function(i) {
                                $('#rupee' + (i+1)).attr("value", setValues[i]);
                        })
                // Choose four random clicks per rupee
                        neededClicks = [0, 0, 0, 0];
                        $.each(neededClicks, function(i) {
                                neededClicks[i] = Math.floor((Math.random() * 4) + 1);
                        })
                // Let rupee values = x and needed clicks = y; target score z = x1y1 + x2y2 + x3y3 + x4y4
                        $.each(setValues, function(i) {
                                targetScore += setValues[i] * neededClicks[i];
                        })
                        document.querySelector("#targetScore").innerHTML = targetScore;
                }

        // Modal function pops up when game is over
                function doModal(heading, formContent) {
                        html =  '<div id="dynamicModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="confirm-modal" aria-hidden="true">';
                        html += '<div class="modal-dialog">';
                        html += '<div class="modal-content">';
                        html += '<div class="modal-header">';
                        html += '<button type="button" class="close" data-dismiss="modal">×</button>';
                        html += heading;
                        html += '</div>';
                        html += '<div class="modal-body">';
                        html += formContent;
                        html += '</div>';
                        html += '<div class="modal-footer">';
                        html += '<button type="type" class="btn btn-warning" data-dismiss="modal">Close</button>';
                        html += '</div>';  // content
                        html += '</div>';  // dialog
                        html += '</div>';  // footer
                        html += '</div>';  // modalWindow
                        $('body').append(html);
                        $("#dynamicModal").modal();
                        $("#dynamicModal").modal('show');
                    
                        $('#dynamicModal').on('hidden.bs.modal', function (e) {
                            $(this).remove();
                        });
                    
                    }                    
                    
                    function hideModal() {
                        $('.modal.in').modal('hide');
                    }

        // Checks if game is over according to current score (aka counter) against target
        // Ends game with either win or loss alert, logs global win/loss
                function winLose() {
                        if (counter === targetScore) {
                                doModal("You win!", trivia[globalWins]);
                                globalWins++;
                                document.querySelector("#globalWins").innerHTML = ("Wins: " + globalWins);
                        } else if (counter > targetScore) {
                                doModal("Sorry, try again!", '<img class="fairy" src="assets/images/fairy.png">');
                                globalLosses++;
                                document.querySelector("#globalLosses").innerHTML = ("Losses: " + globalLosses);
                        };
                }

        // Grabs value from clicked img, checks if game is over according to current score (aka counter) against target
        // If game is not over, adds value to counter, adds img-thumbnail to panel, checks winLose()
        // If game is over, trigger reset() 
                $("#rupeeId").on("click", ".rupee", function() { 
                        var clickValue = ($(this).attr("value")); 
                        clickValue = parseInt(clickValue);

                        if (targetScore === 0) {
                                reset();
                        } else if (counter < targetScore) {                
                                counter += clickValue;
                                document.querySelector("#currentRupees").innerHTML = counter; 
                                var imgThumb = $("<img>");
                                imgThumb.attr("src",($(this).attr("src")));
                                imgThumb.attr("class", "rupee-thumb");
                                $("#counterId").append(imgThumb);
                                winLose();
                        } else if (counter >= targetScore) {
                                reset();
                        }
                });  

});