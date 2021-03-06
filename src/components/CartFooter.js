import React from 'react';
const CartFooter = ({legalStuff2}) => {
  return (
    <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l6 s12">
            <h5 class="white-text">Shop ALL THE THINGS</h5>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          &copy; {legalStuff2.copyright} {legalStuff2.legalLine}
        </div>
      </div>
    </footer>
    )
}
export default CartFooter;
