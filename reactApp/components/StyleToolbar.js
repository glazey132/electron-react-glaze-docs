//packages
import React from 'react';
import { RichUtils, DefaultDraftBlockRenderMap } from 'draft-js';
import { Map } from 'immutable';
import { Row, Col, Button } from 'react-materialize';

//style assets
import INLINE_STYLES from '../assets/inlineStyles';
import BLOCK_TYPES from '../assets/blockTypes';
import '../../css/Toolbar.css';

//imported components
import ColorDropdown from './ColorDropdown';
import StyleButton from './StyleButton';

class StyleToolbar extends React.Component {
  constructor(props) {
    super(props);

    console.log('this.props in style bar ', this.props);
  }

  render() {
    return (
      <div>
        <Row className="toolbar">
          {INLINE_STYLES.map(type => (
            <StyleButton
              active={this.props.editorState
                .getCurrentInlineStyle()
                .has(type.style)}
              key={type.style}
              style={type.style}
              icon={type.icon}
              onToggle={(e, style) => this.props.onToggleInlineStyle(e, style)}
            />
          ))}
          <ColorDropdown
            className="toolbar-button"
            onToggle={(e, style) => this.props.onToggleInlineStyle(e, style)}
          />
          {BLOCK_TYPES.map(type => (
            <StyleButton
              className="toolbar-button"
              active={this.props.editorState
                .getCurrentInlineStyle()
                .has(type.style)}
              key={type.style}
              style={type.style}
              icon={type.icon}
              onToggle={(e, style) => this.props.onToggleBlockType(e, style)}
            />
          ))}
        </Row>
        <Row className="toolbar">
          <StyleButton
            key={'save'}
            icon={'save'}
            onSave={() => this.props.onSave()}
          />
        </Row>
      </div>
    );
  }
}

export default StyleToolbar;
