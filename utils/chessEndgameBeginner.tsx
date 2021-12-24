type FieldIf = {
  [key: string]: string
}

type Texti18nIf = {
  [key: string]: FieldIf
}

export const chessEndgameBeginner: Texti18nIf = {
  vn: {
    introduce: "Giới thiệu",
    staircase: "Nguyên tắc Bậc Thang",
    text1: "Khi bắt đầu học chơi cờ, những người mới chơi thường được dạy rằng phải luôn chơi đến hơi thở cuối cùng vì <em>“không ai từng thắng một trò chơi nếu họ đã đầu hàng”</em>. Mặc dù số phận của người phòng thủ ít nhiều đã biết trước khi anh ta thua nhiều hơn một quân xe, nhưng việc anh ta vẫn tiếp tục và xem các bước phối hợp cuối cùng như thế nào sẽ giúp anh ta học cách làm điều đó khi anh ta ở bên chiến thắng. Ngoài ra, người mới bắt đầu có thể sẽ từ bỏ những tình huống như vậy khi anh ta bắt đầu đấu với những người chơi có kinh nghiệm trong giải đấu, nhưng lúc đầu, không phải là một ý kiến ​​tồi nếu bạn luôn chơi đến khi hết cờ và xem liệu người chơi kia có biết cách phối hợp các quân cờ của mình hay không. Hãy luôn nghĩ rằng đối thủ của bạn sẽ chơi những nước đi tốt nhất, vì vậy chương này là điều bắt buộc dành cho những người mới học để giúp họ chơi đúng.",
    text2: "Người mới bắt đầu chỉ cần lưu ý hai tình huống kết thúc trò chơi: <b>Lực lượng áp đảo</b> (một bên có số lượng vật chất lớn hơn nhiều so với Vua đơn độc của bên kia) và <b>Hòa cờ bắt buộc</b> (một bên không có nước di chuyển hợp lệ, nhưng không bị chiếu vua).",
    text3: "Khi bạn được hỗ trợ bởi một quân Hậu và một quân Xe, hoặc thậm chí bởi hai quân Hậu (hoặc nhiều hơn!), người ta tự hỏi liệu đối thủ của bạn (người có thể từ bỏ và thể hiện một chút tôn trọng) là một người ngoan cố hay chỉ đơn giản là thích đau khổ. Dù lý do tiếp tục của anh ấy là gì, thì giờ đây bạn phải là người chứng minh việc giành chiến thắng dễ dàng như thế nào. Mặc dù có nhiều cách để chiếu hết nhanh chóng trong nhiều tình huống, nhưng cách đơn giản được đề xuất ở đây <em>(Nguyên tắc Bậc thang)</em> giúp tất cả các tàn cuộc mà bạn có được hai quân mạnh (còn được gọi là quân nặng) -(Q + Q or Q + R or R + R), không cần suy nghĩ nhiều để giành chiến thắng. Ba thành phần chính của <em>Nguyên tắc Bậc thang</em> là:",
    st1: "1. Đẩy vua đối phương đến cạnh của bàn cờ",
    figure1: "Hình 1: Vua đen đang ở cạnh của bàn cờ",
    figure2: "Hình 2: Vua đen vẫn đang ở cạnh của bàn cờ",
    stRule2: "2. Sử dụng một trong những quân mạnh của bạn (Xe hoặc Quân hậu) để ngăn vua đối phương khỏi hàng hoặc cột.",
    fig3: "Hình 3. Quân xe ngăn vua của đối phương",
    stRule2Text1: "Trong hình 3, quân xe giữ vua đối phương ở hai hàng cuối cùng. Đường từ quân xe đến cạnh bàn cờ (f6-a6) tượng trưng cho một bức tường mà vua của quân đen không thể đi qua.",
    stRule3: "3. Sử dụng quân cờ mạnh khác để đuổi vua đối phương ra khỏi hàng hoặc cột tiếp theo.",
    fig4: "Hình 4. Đuổi vua đen khỏi hàng 7",
    stRule3Text1: "Ở hình 4, Trắng vừa chơi Qf7+. Vua của Đen không thể di chuyển về giữa do bức tường của quân Xe, do đó nó phải bước đến cạnh bàn cờ.",
    fig5: "Hình 5. Vua đen ở cạnh bàn cờ",
    stRule3Text2: "Sau 1...Ke8 (hoặc 1...Kb8 hoặc 1...Kd8), Hậu trắng sẽ ngăn Vua tiến về phía trước. Điều này giải phóng xe khỏi <em>\"nhiệm vụ giữ vua đen\"</em>, cho phép nó thực hiện bước đi cuối cùng với 2.Rg8 để chiếu hết! Lưu ý cách chuyển động của Xe và Hậu giống với các bước lên hoặc xuống <em>cầu thang</em>.",
    fig6: "Hình 6. Chiếu hết!",
    stRule3Text3: "Nhắc lại thông tin này dưới dạng đoạn văn: Như trong hầu hết các ván đấu có chiếu hết, bạn cần đẩy Vua của đối phương ra cạnh bàn cờ. Mục đích của <em>Nguyên tắc Cầu thang</em> là sử dụng một quân mạnh (Xe hoặc Quân hậu) để ngăn Vua đối phương đi vào hàng hoặc cột. Sau đó, quân cờ chính khác sẽ chiếu ở hàng hoặc cột tiếp theo, buộc Vua đen phải bước gần hơn đến số phận của nó khi ở gần cạnh của bàn cờ hơn.",
    stRule3Text4: "Chơi thêm các ván khác trong phần này (nó không phải là khoa học phức tạp, do đó không cần phải suy nghĩ về nó) và <em>Nguyên tắc Cầu thang</em> sẽ nhanh chóng khắc sâu trong tâm trí bạn.",
    theBox: "Nguyên tắc Cái Hộp",
    boxText1: "<p> Đây là một ý tưởng tàn cuộc rất quan trọng và cơ hội sử dụng nó sẽ xuất hiện thường xuyên trong khi chơi cờ vua của bạn. Hãy nhớ rằng Nguyên tắc Cái Hộp không phải lúc nào cũng là cách nhanh nhất để chiếu hết mà chỉ là cách dễ học nhất.</p><p>Trong cả hai trường hợp: Vua + Hậu đấu với Vua, Vua + Xe đấu với Vua, mục tiêu là giam cầm Vua đối phương trong một Cái Hộp ngày càng thu nhỏ.</p><p>Điểm quan trọng về việc sử dụng cả Vua và Hậu để chiếu hết là một điều quan trọng. Cờ vua là một trò chơi đồng đội trong đó quân cờ của bạn phụ thuộc vào toàn bộ quân đội của bạn để hoàn thành công việc. Vì một Xe đơn độc hoặc thậm chí Hậu đơn độc không thể chiếu hết Vua đối phương, bạn sẽ phải mời Vua của bạn tham gia nếu bạn muốn giành chiến thắng.</p><p>Trong hầu hết các tàn cuộc — cơ bản và phức tạp — Sự tham gia của Vua là một phần quan trọng của chiến dịch tấn công hoặc phòng thủ.</p>",
    boxText2: "Hai nhiệm vụ để Nguyên tắc Cái Hộp thành công:",
    boxAdvice: "<strong> Lời khuyên hữu ích </strong>: Không giống như các trường hợp trước đây của hai quân Xe đấu với Vua, hoặc hai Hậu đấu với Vua, Hậu đơn độc hoặc Xe đơn độc không thể chiếu hết Vua đối phương!, Vua trắng phải tham gia vào cuộc săn, hoặc nếu không thì không thể chiếu hết.",
  },
  en: {
    introduce: "Introduce",
    staircase: "The Staircase",
    text1: "When players first learn the game, they are often taught to always play to the last breath since “nobody ever won a game by resigning”. Though the defender's fate is more or less a foregone conclusion when he's a Rook or more down, it doesn't hurt him to continue and watch the final mating net unfold—thus learning how to do it when he is on the winning side. Eventually, the beginner will resign such situations when he begins to play against experienced tournament players, but at first it's not a bad idea to always play them out and see if the op- ponent knows his stuff. Don't doubt that your opponents will play them out, so this chapter is a must if you've just learned to play the game.",
    text2: "Beginners only need to be aware of two endgame situations: <b>Overkill Mates</b> (one side has an enormous amount of material versus the lone enemy King) and <b>Stalemates</b> (one side has no legal moves, but is not in check).",
    text3: "When you are up by a Queen and a Rook, or even by two Queens (or more!), one must wonder if your opponent (who could give up and show a bit of respect) is bullheaded or simply enjoys suffering and/or pain. Whatever his reasons for continuing might be, you are the one who must now demonstrate how easy it is to score the victory.\nThough there are many ways to force a quick mate in such situations, the simple device recommended here (the Staircase) makes all endgames where you are up by two major (also known as heavy) pieces (Q + Q or Q + R or R + R) a no-brainer to win. The three key components of the Staircase are:",
    st1: "1. Push the enemy King to one of the four sides of the board",
    figure1: "Figure 1: Black's King is on the side of the board",
    figure2: "Figure 2: Black's King is still on the side of the board",
    stRule2: "2. Use one of your heavy/major pieces (Rook or Queen) to cut the enemy King off from a rank or file.",
    fig3: "Figure 3. The Rook traps the enemy King",
    stRule2Text1: "In figure 3, the Rook traps the enemy King on the last two ranks. The line from the Rook to the queenside (g6-a6) represents an imaginary force field that black's King can't pass through.",
    stRule3: "3. Use the other major piece to check the King off the next file or rank.",
    fig4: "Figure 4. Kicking black's King of the 7th rank",
    stRule3Text1: "In diagram 4, White has just played Qf7+. Black's King can't move towards the middle due to the Rook's \"force field\", thus it must step to the board's side.",
    fig5: "Figure 5. The black's King is on the board side",
    stRule3Text2: "After 1...Ke8 (or 1...Kb8 or 1...Kd8), the Queen now stops the King from moving forward. This frees the Rook from “King-containing duty,” allowing it to administer the final blow with 2.Rg8 mate. Note how the movements of the Rook and Queen resemble steps up or down a Staircase",
    fig6: "Figure 6. The checkmate!",
    stRule3Text3: "Repeating this information in paragraph form: As in almost all mating end- games, you need to push the enemy King to the back rank. The point of the Staircase is to use one major piece (Rook or Queen) to keep the enemy King from stepping onto a rank or file. Then the other major piece will give check along the next rank or file, forcing the target King to step closer to its doom on the side of the board.",
    stRule3Text4: "Play over the positions in this section quickly (it's not rocket science, so there's no need to ponder it), and the Staircase will rapidly become engrained in your mind.",

    theBox: "The Box",
    boxText1: "<p>This is a very important endgame idea, and chances to use it will occur remarkably often throughout your chess career. Keep in mind that the Box isn't always the fastest way to mate, merely the easiest to learn.</p><p>In the case of both King and Queen vs. King, and King and Rook vs. King, the goal is to imprison the enemy monarch in an ever-shrinking Box.</p><p>The point about using both King and Queen to force mate is an important one. Chess is a team game where your pieces depend on your whole army to get a job done. Since a lone Rook or even Queen can't mate the enemy King, you will have to get your King involved if you wish to score the full point.</p><p>In most endgames—basic and complicated—King participation is a huge part of a successful winning campaign or defensive stand.</p>",
    boxText2: "Two mandates for a successful Box:",
    boxAdvice: "<strong>Userful Advice</strong>: A lone Queen can't mate the enemy King! Unlike the previous cases of two Rooks vs. King, and two Queens vs. King, white's King must join in the hunt or mate can't be achieved.",

  }
}
