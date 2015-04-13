/**
 * @author xiaojue [designsor@gmail.com]
 * @date 20150413
 * @fileoverview 配置文件管理
 */

var path = require('path');
var fs = require('fs-extra');
var LOCALPATH = process.env.HOME || process.env.USERPROFILE;

function configManager(configFileName) {
  this.configFileName = configFileName;
  this.dir = path.join(LOCALPATH, '.fd-server');
  this.configPath = path.join(this.dir, this.configFileName);
  this.init();
}

configManager.prototype = {
  constructor: configManager,
  init: function() {
    var self = this;
    var dpath = path.join(__dirname, "../", self.configFileName);
    if (!fs.existsSync(self.dir)) {
      fs.mkdirsSync(self.dir);
    }
    if (!fs.existsSync(self.configPath) && fs.existsSync(dpath)) {
      self.set(fs.readFileSync(dpath, 'utf-8'));
    }
  },
  get: function(key) {
    return this.getJson() ? this.getJson()[key] : undefined;
  },
  set: function(key, val) {
    var json = this.getJson() || {};
    json[key] = val;
    this.saveData(json);
  },
  remove: function(key) {
    var json = this.getJson() || {};
    delete json[key];
    this.saveData(json);
  },
  //保存数据
  saveData: function(data, filename) {
    var content = typeof data == "string" ? data: JSON.stringify(data, null, 4);
    var filePath = this.getPath(filename);
    fs.writeFileSync(filePath, content, 'utf-8');
  },
  //获取数据 json格式
  getJson: function(filename) {
    var fileContent = this.getContent(filename);
    if (fileContent) {
      return JSON.parse(fileContent);
    } else {
      return null;
    }
  },
  //获取数据 字符串
  getContent: function(filename) {
    var filePath = this.getPath(filename);
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, 'utf-8');
    } else {
      return null;
    }
  },
  //获取路径
  getPath: function(filename) {
    return filename ? path.join(this.dir, filename) : this.configPath;
  }
};

module.exports = configManager;
