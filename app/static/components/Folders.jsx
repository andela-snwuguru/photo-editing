import React from 'react';
import Options from '../components/Options';

export default class extends React.Component {
    constructor() {
      super();

    }

    render() {
        return (
         <div class="row">


          <div class="col-sm-4 col-md-3">
            <div class="thumbnail">
            <Options />
            <a href="#"><img src="../static/images/icons/folder.png"  /></a>
              <div class="caption">
                <h5>Campaign for beauty <span class="badge">4</span></h5>
              </div>
            </div>
          </div>


          <div class="col-sm-4 col-md-3">
            <div class="thumbnail">
            <Options />
            <a href="#"><img src="../static/images/icons/folder.png"  /></a>
              <div class="caption">
                <h5>Campaign for beauty <span class="badge">4</span></h5>
              </div>
            </div>
          </div>


          <div class="col-sm-4 col-md-3">
            <div class="thumbnail">
            <Options />
            <a href="#"><img src="../static/images/icons/folder.png"  /></a>
              <div class="caption">
                <h5>Campaign for beauty <span class="badge">4</span></h5>
              </div>
            </div>
          </div>


          <div class="col-sm-4 col-md-3">
            <div class="thumbnail">
            <Options />
            <a href="#"><img src="../static/images/icons/folder.png"  /></a>
              <div class="caption">
                <h5>Campaign for beauty <span class="badge">4</span></h5>
              </div>
            </div>
          </div>

         </div>
        );
    }
}