import Dream from "./../../../ImageResource/Dream.png";
import raft from "./../../../ImageResource/raft.jpeg";

const sandmanDescription=  "A python implementation of a moderation bot backed by a mySQL database. " +
    "The bot primary serves as a moderator tools for the community CS server, while providing " +
    "stateful role menu for intuitive role assignment utilizing the discord API. slash-command library " +
    "was used instead of discord.py, as at the starting time of this project, the maintainer of the repository " +
    "has not yet made his return."

const dotDescription = "A collection of my dot files. These are are the conifgs I use for my terminal setup. " +
    "I'm primarily a NeoVim user, who uses (zsh + oh-my-zsh + powerline10k) as my shell."

const raftDescription = "A python implementation for the raft consensus algorithm. " +
    "This is the final project for my Network and distribution system. The implementation is heavily influenced " +
    "by a british guy who had a whole course posted on distribution system. Code is not linked due to privacy reasons."

const projectContent = [
  {
    title: "Sandman Discord Bot",
    description: sandmanDescription,
    image: Dream,
    alt: "Dream"
  },
  {
    title: "Dot Files",
    description: dotDescription,
    image: Dream,
    alt: "dot"
  },
  {
    title: "Raft Consensus Algorithm",
    description: raftDescription,
    image: Dream,
    alt: "raft"
  }
]

export default projectContent;

