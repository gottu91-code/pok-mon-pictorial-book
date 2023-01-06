import { Link } from "react-router-dom";
import styled from "styled-components";
import { Btn } from "./Btn";
import { BtnBox } from "./BtnBox";
import { Frame } from "./Frame";

const SInfo = styled.div`
  h2 {
    text-align: center;
  }
  table {
    margin-top: 20px;
    background-color: #fafafa;
    border-radius: 8px;
    padding: 30px;
    width: 80%;
    margin-inline: auto;
    margin-bottom: 40px;
    @media (max-width: 1024px) {
      width: 100%;
      padding: 15px;
    }
    tr:nth-child(odd) {
      th,
      td {
        background-color: #fff;
      }
    }
    th,
    td {
      padding: 20px 20px;
      border-bottom: 1px solid #fff;
      @media (max-width: 500px) {
        padding: 10px 10px;
      }
    }
    th {
      white-space: nowrap;
      text-align: left;
      vertical-align: top;
    }
  }
`;

export const Info = () => {
  return (
    <SInfo>
      <Frame>
        <div className="container">
          <h2>使用技術</h2>
          <table>
            <tbody>
              <tr>
                <th>実装期間</th>
                <td>3日間</td>
              </tr>
              <tr>
                <th>jsライブラリ</th>
                <td>React</td>
              </tr>
              <tr>
                <th>使用API</th>
                <td>Poke API</td>
              </tr>
              <tr>
                <th>スタイリング</th>
                <td>styled-components</td>
              </tr>
              <tr>
                <th>ルーティング</th>
                <td>react-router-dom</td>
              </tr>
              <tr>
                <th>ホスティング</th>
                <td>Vercel</td>
              </tr>
              <tr>
                <th>バージョン管理</th>
                <td>
                  Git / GitHub
                  <br />
                  <a
                    href="https://github.com/gottu91-code/pok-mon-pictorial-book"
                    target="_blank"
                  >
                    リポジトリはこちら
                  </a>
                </td>
              </tr>
              <tr>
                <th>コメント</th>
                <td>
                  SPAで実装しました。Reactを使ったSPAの実装が初めてだったのでとても学びがありました。スタイリング、ルーティング、パフォーマンス、ローディング、非同期処理、Hooks、APIなどなど。
                  <br />
                  <br />
                  Git /
                  GitHubを使って実際のweb開発のフローに沿うことを意識しました。デプロイ用ブランチとしてmainブランチを設定し、機能開発はdevelopブランチを作成して開発を進めました。1機能作成ごとにコミットするようにし履歴を辿りやすくなるようにしました。
                  <br />
                  <br />
                  スタイリングはstyled-componentsで統一しました。コンポーネントごとにcssが干渉しないので非常に快適でした。
                  <br />
                  <br />
                  Poke
                  API自体は英語のAPIなのでポケモンの名前を日本語で表示させるのに苦労しました。レスポンスの中身をよく見て日本語の名前へと辿れるURLを発見したので追加でリクエストを送ることで日本名を表示させました。複数回リクエストを送っているのでパフォーマンスは良くないですが、APIの仕様なのでどうしようもないところかと思います。
                </td>
              </tr>
            </tbody>
          </table>
          <BtnBox>
            <Link to="/">
              <Btn>TOPへ戻る</Btn>
            </Link>
          </BtnBox>
        </div>
      </Frame>
    </SInfo>
  );
};
