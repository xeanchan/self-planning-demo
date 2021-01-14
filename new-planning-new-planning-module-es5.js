function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-planning-new-planning-module"], {
  /***/
  "./src/app/form/CalculateForm.ts":
  /*!***************************************!*\
    !*** ./src/app/form/CalculateForm.ts ***!
    \***************************************/

  /*! exports provided: CalculateForm */

  /***/
  function srcAppFormCalculateFormTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CalculateForm", function () {
      return CalculateForm;
    });

    var CalculateForm = function CalculateForm() {
      _classCallCheck(this, CalculateForm);

      this.sessionid = null;
      this.taskName = null;
      this.totalRound = 1;
      this.mapName = null;
      this.mapImage = null; // createTime = null;

      this.crossover = 0.8;
      this.mutation = 0.4;
      this.iteration = 100;
      this.seed = 10;
      this.defaultBs = null;
      this.candidateBs = null;
      this.width = null;
      this.height = null;
      this.altitude = null;
      this.zValue = null;
      this.pathLossModelId = 0;
      this.ueCoordinate = null;
      this.useUeCoordinate = 1;
      this.powerMaxRange = null;
      this.powerMinRange = null;
      this.beamMaxId = null;
      this.beamMinId = null;
      this.objectiveIndex = '2'; // threshold = null;

      this.obstacleInfo = null;
      this.availableNewBsNumber = 0;
      this.addFixedBsNumber = 0;
      this.bandwidth = null;
      this.Frequency = null;
      this.isAverageSinr = false;
      this.sinrRatio = null;
      this.isAvgThroughput = false;
      this.throughputRatio = null;
      this.isCoverage = false;
      this.coverageRatio = null;
      this.isUeAvgSinr = false;
      this.ueAvgSinrRatio = null;
      this.isUeAvgThroughput = false;
      this.ueAvgThroughputRatio = null;
      this.isUeTpByDistance = false;
      this.ueTpByDistanceRatio = null; // modelname: string = null;
      // distanceFactor: number = null;
      // contantFactor: number = null;

      this.mctsC = null;
      this.mctsMimo = null;
      this.mctsTemperature = null;
      this.mctsTime = null;
      this.mctsTestTime = null;
      this.mctsTotalTime = null; // constructor(options: {
      //   sessionid?: string,
      //   taskName?: string,
      //   totalRound?: number,
      //   mapName?: string,
      //   mapImage?: string,
      //   // createTime?: string,
      //   crossover?: number,
      //   mutation?: number,
      //   iteration?: number,
      //   seed?: number,
      //   defaultBs?: string,
      //   candidateBs?: string,
      //   width?: number,
      //   height?: number,
      //   altitude?: number,
      //   zValue?: string,
      //   pathLossModelId?: number,
      //   ueCoordinate?: string,
      //   useUeCoordinate?: number,
      //   powerMaxRange?: number,
      //   powerMinRange?: number,
      //   beamMaxId?: number,
      //   beamMinId?: number,
      //   objectiveIndex?: number,
      //   // threshold?: number,
      //   obstacleInfo?: string,
      //   availableNewBsNumber?: number,
      //   addFixedBsNumber?: number,
      //   bandwidth?: number,
      //   Frequency?: number
      // } = {}) {
      //     this.sessionid = options.sessionid;
      //     this.taskName = options.taskName;
      //     this.mapName = options.mapName;
      //     this.mapImage = options.mapImage;
      //     // this.createTime = options.createTime;
      //     this.crossover = options.crossover;
      //     this.mutation = options.mutation;
      //     this.iteration = options.iteration;
      //     this.seed = options.seed;
      //     this.defaultBs = options.defaultBs;
      //     this.candidateBs = options.candidateBs;
      //     this.width = options.width;
      //     this.height = options.height;
      //     this.altitude = options.altitude;
      //     this.zValue = options.zValue;
      //     this.pathLossModelId = options.pathLossModelId;
      //     this.ueCoordinate = options.ueCoordinate;
      //     this.useUeCoordinate = options.useUeCoordinate;
      //     this.powerMaxRange = options.powerMaxRange;
      //     this.powerMinRange = options.powerMinRange;
      //     this.beamMaxId = options.beamMaxId;
      //     this.beamMinId = options.beamMinId;
      //     this.objectiveIndex = options.objectiveIndex;
      //     // this.threshold = options.threshold;
      //     this.obstacleInfo = options.obstacleInfo;
      //     this.availableNewBsNumber = options.availableNewBsNumber;
      //     this.addFixedBsNumber = options.addFixedBsNumber;
      //     this.bandwidth = options.bandwidth;
      //     this.Frequency = options.Frequency;
      // }
    };
    /***/

  }
}]);
//# sourceMappingURL=new-planning-new-planning-module-es5.js.map