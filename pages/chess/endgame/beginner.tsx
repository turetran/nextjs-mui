import type { NextPage } from 'next'
import { Chessboard } from 'react-chessboard';
import { useState, createRef, useEffect, useRef } from 'react';
import * as ChessJS from 'chess.js';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { styled } from '@mui/material/styles'
import { red } from '@mui/material/colors';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import MuiLink from '@mui/material/Link'

type FieldIf = {
  [key: string]: string
}

type Texti18nIf = {
  [key: string]: FieldIf
}

const texti18n: Texti18nIf = {
  vn: {
    home: "Trang chủ",
    chess: "Cờ vua",
    endGame: "Tàn cuộc",
    beginner: "Người mới",
    classE: "Lớp E",
    classD: "Lớp D",
    introduce: "Giới thiệu",
    text1: "Khi bắt đầu học chơi cờ, những người mới chơi thường được dạy rằng phải luôn chơi đến hơi thở cuối cùng vì <em>“không ai từng thắng một trò chơi nếu họ đã đầu hàng”</em>. Mặc dù số phận của người phòng thủ ít nhiều đã biết trước khi anh ta thua nhiều hơn một quân xe, nhưng việc anh ta vẫn tiếp tục và xem các bước phối hợp cuối cùng như thế nào sẽ giúp anh ta học cách làm điều đó khi anh ta ở bên chiến thắng. Ngoài ra, người mới bắt đầu có thể sẽ từ bỏ những tình huống như vậy khi anh ta bắt đầu đấu với những người chơi có kinh nghiệm trong giải đấu, nhưng lúc đầu, không phải là một ý kiến ​​tồi nếu bạn luôn chơi đến khi hết cờ và xem liệu người chơi kia có biết cách phối hợp các quân cờ của mình hay không. Hãy luôn nghĩ rằng đối thủ của bạn sẽ chơi những nước đi tốt nhất, vì vậy chương này là điều bắt buộc dành cho những người mới học để giúp họ chơi đúng.",
    text2: "Người mới bắt đầu chỉ cần lưu ý hai tình huống kết thúc trò chơi: <b>Lực lượng áp đảo</b> (một bên có số lượng vật chất lớn hơn nhiều so với Vua đơn độc của đối thủ) và <b>Hòa cờ bắt buộc</b> (một bên không có nước di chuyển hợp lệ, nhưng không bị chiếu vua).",
  },
  en: {
    home: "Home",
    chess: "Chess",
    endGame: "End Game",
    beginner: "Beginner",
    classE: "Class E",
    classD: "Class D",
    introduce: "Introduce",
    text1: "When players first learn the game, they are often taught to always play to the last breath since “nobody ever won a game by resigning”. Though the defender's fate is more or less a foregone conclusion when he's a Rook or more down, it doesn't hurt him to continue and watch the final mating net unfold—thus learning how to do it when he is on the winning side. Eventually, the beginner will resign such situations when he begins to play against experienced tournament players, but at first it's not a bad idea to always play them out and see if the op- ponent knows his stuff. Don't doubt that your opponents will play them out, so this chapter is a must if you've just learned to play the game.",
    text2: "Beginners only need to be aware of two endgame situations: <b>Overkill Mates</b> (one side has an enormous amount of material versus the lone enemy King) and <b>Stalemates</b> (one side has no legal moves, but is not in check).",
  }
}

const Typo = styled(Typography)({
  marginTop: 10,
})

const EndGameBeginner: NextPage = () => {

  const { locale } = useRouter()
  const _lc = locale || 'vn'

  const chessboardRef: any = useRef();
  const Chess = typeof ChessJS === "function" ? ChessJS : ChessJS.Chess;
  const [game, setGame] = useState(new Chess());

  function safeGameMutate(modify: any) {
    setGame((g) => {
      const update = { ...g };
      modify(update);
      return update;
    });
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0) return; // exit if the game is over
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    safeGameMutate((game: any) => {
      game.move(possibleMoves[randomIndex]);
    });
  }

  function onDrop(sourceSquare: any, targetSquare: any) {
    let move = null;
    safeGameMutate((game: any) => {
      move = game.move({
        from: sourceSquare,
        to: targetSquare,
        promotion: 'q' // always promote to a queen for example simplicity
      });
    });
    if (move === null) return false; // illegal move
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return <Box>
    <Box display={'flex'}
      justifyContent={"center"}
      alignItems={"center"}
      style={{ border: "0px solid red" }}
    >
      <Box
        maxWidth={720}
        style={{ border: "0px solid blue", marginRight: 5 }}
      >
      <Breadcrumbs aria-label="breadcrumb">
        <Link href='/'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].home}</MuiLink></Link>
        <Link href='/chess'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].chess}</MuiLink></Link>
        <Link href='/chess/endgame'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].endGame}</MuiLink></Link>
        <Link href='/chess/endgame/beginner'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].beginner}</MuiLink></Link>
      </Breadcrumbs>
      
        <Typo variant='h4'>{texti18n[_lc].introduce}</Typo>
        <Typo align="justify" dangerouslySetInnerHTML={{ __html: texti18n[_lc].text1 }} />
        <Typo align="justify" dangerouslySetInnerHTML={{ __html: texti18n[_lc].text2 }} />
        <Chessboard
          key="chessboard1"
          id={5}
          position={game.fen()}
          areArrowsAllowed={true}
          arePiecesDraggable={true}
          customArrows={[['a3', 'a5'], ['g1', 'f3']]}
          boardWidth={200}
          showBoardNotation={true}
          onPieceDrop={onDrop}
          ref={chessboardRef}
        />
      </Box>
    </Box>
  </Box>
}

export default EndGameBeginner
