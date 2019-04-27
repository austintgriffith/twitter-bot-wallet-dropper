# twitter-bot-wallet-dropper
DMs a preloaded burner wallet via link triggered from DM or tweet

The idea is someone tweets a specific message or DMs a message to the bot and the bot sends them back a link in a DM. If they follow the link it takes them to a game with a wallet preloaded with funds to get started.

I think a good POC would be a bot that echos back to the user in a DM and also sends a DM when it detects a specific string.

My preference is it is written in node so I can quickly jump in and edit it.

The links will be supplied in a file so you can just pop the top one off the list and send it.

Concerned with sybil resistance. If we host a game and have 500 wallets going out, I only want one per person.

Maybe you have to be followed by me or have a certain number of followers?
