import { 
  circle, info, link, question, video, Outlet1, Outlet2, hugo1, hugo2, hugo3
} from './images/images';

class TourSettings {

  getDefaultScene() {
    return "Outlet1";
  }

  getNewUser() {
    const newUser = { name: null, canPickupKey: true };
    return newUser;
  }

  getSceneImage(sceneName) {
    switch (sceneName) {
      default:
        return Outlet1;
      case 'Outlet1':
        return Outlet1;
      case 'Outlet2':
        return Outlet2;
      case 'hugo1':
        return hugo1;
      case 'hugo2':
        return hugo2;
      case 'hugo3':
        return hugo3;
    }
  }

  getHotspotImage(hotspotType) {
    switch (hotspotType) {
      default:
        return circle;
      case 'link':
        return link;
      case 'info':
        return info;
      case 'question':
        return question;
      case 'video':
        return video;
    }
  }

  getHotspotInfo(hotspotType) {
    switch (hotspotType) {
      default:
        return false;
      case 'info': case 'video':
        return true;
    }
  }

}

export default new TourSettings();