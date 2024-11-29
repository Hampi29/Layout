// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onClickLeftnav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onClickRightnav = event => {
        onToggleShowRightNavbar(event.target.value)
      }
      const onClickContent = () => {
        onToggleShowContent()
      }
      return (
        <div className="controller-container">
          <h1>Layout</h1>
          <div>
            <input
              type="checkbox"
              id="leftnavbar"
              onChange={onClickLeftnav}
              checked={showLeftNavbar}
            />
            <label for="leftnavbar">Left Navbar</label>
            <input
              type="checkbox"
              id="content"
              onChange={onClickContent}
              checked={showContent}
            />
            <label for="content">Content</label>
            <input
              type="checkbox"
              id="rightnavbar"
              onChange={onClickRightnav}
              checked={showRightNavbar}
            />
            <label for="rightnavbar">Right Navbar</label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
