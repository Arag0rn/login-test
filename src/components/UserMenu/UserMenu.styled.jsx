import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
text-align: center;
text-transform: uppercase;
display: flex;
gap: 10px;
`

export const WelTxt = styled.p`
color: white;
`

export const LogOutBtn = styled.button`
    display: inline-block;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-shadow: 0 -1px rgba(0,0,0,.5);
  user-select: none;
  padding: .3em 0.5em;
  border-radius: 5px;
  outline: none;
  background: rgb(147,80,36) linear-gradient(rgb(106,58,26), rgb(147,80,36) 80%);
  box-shadow:
   0 6px rgb(86,38,6),
   0 3px 15px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  transition: .2s;
&:hover {
  background: rgb(167,91,41) linear-gradient(rgb(126,69,31), rgb(167,91,41) 80%);
}
&:active {
  background: rgb(120,63,25) linear-gradient(rgb(120,63,25) 20%, rgb(167,91,41));
  box-shadow:
   0 2px rgb(86,38,6),
   0 1px 6px rgba(0,0,0,.4),
   inset 0 1px rgba(255,255,255,.3),
   inset 0 0 3px rgba(255,255,255,.5);
  -webkit-transform: translate(0, 4px);
  transform: translate(0, 4px);
}
`