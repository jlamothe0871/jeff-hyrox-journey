function doGet(e) {
  var page = (e && e.parameter && e.parameter.page)
    ? String(e.parameter.page).toLowerCase()
    : 'home';

  var templateName;

  switch (page) {
    case 'dashboard':
      templateName = 'journey-dashboard';
      break;
    case 'recaps':
      templateName = 'weekly-recaps';
      break;
    case 'start':
      templateName = 'start-your-journey';
      break;
    case 'community':
      templateName = 'community';
      break;
    case 'about':
      templateName = 'about';
      break;
    case 'routine':
      templateName = 'routine';
      break;
    case 'workouts':
      templateName = 'workouts';
      break;
    case 'home':
    default:
      templateName = 'index';
      break;
  }

  var template = HtmlService.createTemplateFromFile(templateName);

  return template
    .evaluate()
    .setTitle('Everyday Engine – Hyrox Journey')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

// used by <?!= include('...'); ?> in main templates
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

