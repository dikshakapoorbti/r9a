import React from "react";

const Logo = () => (
  <div className="flex items-center space-x-2">
    {/* Company logo image served from public/r9a-logo.png */}
    <img
      src="/r9a-logo.png"
      alt="r9a logo"
      className="h-8 w-auto"
    />
    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
      Retrospecta
    </span>
  </div>
);

export default Logo;
