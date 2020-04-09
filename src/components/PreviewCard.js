/* eslint-disable no-useless-constructor */
import React from 'react';
import ResetButton from './PreviewCard-components/ResetButton';
import UserInfo from './PreviewCard-components/UserInfo';
import PhotoUser from './PreviewCard-components/PhotoUser';
import IconsRRSS from './PreviewCard-components/IconsRRSS';
import loop from '../images/giphy.webp';

class PreviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="page__preview" id="page__preview">
        <div className="preview__card--container">
          <ResetButton />

          <div className="preview__card--box preview__card--box--palette1">
            <UserInfo />
            <PhotoUser />
            <IconsRRSS emailIcon={this.props.iconEmail}
                       phoneIcon={this.props.iconPhone}
                       linkedinIcon={this.props.iconLinkedin}
                       githubIcon={this.props.iconGithub}
                       />
          </div>

          <div className="loop__background--preview">
            <img
              src={loop}
              alt="Gif Loop"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PreviewCard;
